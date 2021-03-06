import http from 'http';
import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import zlib from 'zlib';
import mime from './mime.json';
import c from './colors';
import {table} from './table';
import {mwLivereload, mwInjectLivereload} from './livereload';
import {version} from './../../package.json';

export function startHTTPServer(options){
    const production = (options.watch === false && options.cache && options.compress);
    return new Promise(async (resolve,reject)=>{
        
        const clearSID = await saveSID(options);

        const server = http.createServer(function (req, res) {

            let middlewares = [
                mwURLParse(options),
                mwJsonParse(options),
                mwSend(options),
                mwServer(options)
            ];
    
            middlewares = middlewares.concat(options.middlewares.list());
    
            if(options.dir){
                middlewares = middlewares.concat([
                    mwLivereload(options),
                    mwFile(options),
                    mwStatic(options),
                    mwInjectLivereload(options)
                ])
            }
    
            middlewares = middlewares.concat([
                mwEncode(options),
                mwCache(options)
            ])

            runMiddlewares(middlewares,req,res);
        });

        server.on('listening',_ => {
            resolve(server);
            if(options.banner){
                table()
                    .line(production ? 'Derver server started' : 'Development server started','bold')
                    .line('on')
                    .line(`http://${options.host}:${options.port}`,'blue')
                    .print(5,'green')
            }
        })

        server.on('error',e => {
            console.log(c.bold('\n\nServer starting error:'));
            console.log('  '+c.red(e.toString()) + '\n\n');
            reject(e.toString());
        })
        
        server.listen(options.port,options.host);

        const onclose = async ()=>{
            await clearSID();
            server.close();
        }

        process.on('SIGTERM', onclose);
        process.on('exit', onclose);
    });    
}

export function createMiddlwaresList(){
    const middlewares = [];

    function addMiddleware(obj){
       
        for(let mw of obj.middlewares){
            middlewares.push(function(req,res,next){
                
                if(obj.method && obj.method !== req.method) return next();
    
                if(obj.pattern && obj.pattern !== ''){
                    const match = getRouteMatch(obj.pattern,req.path);
                    if(!match || (obj.exact && !match.exact)) return next();
                    req.params = match.params; 
                }
                mw(req,res,next);
            });
        }
    }

    function parseArguments(args,name,pattern){
        args = Array.from(args);
        let subpattern = args.length > 0 && typeof args[0] == 'string' ? args.shift() : null;
        if(subpattern && !subpattern.startsWith('/')) subpattern = '/'+subpattern;
        return {
            method: name == 'use' ? null : name.toUpperCase(),
            pattern: (pattern||'')+(subpattern||''),
            exact:!(pattern && !subpattern),
            middlewares: args.filter(fn => typeof fn == 'function')
        }
    }

    function getMethods(pattern){
        const methods = new Proxy({},{
            get(_, name) {
                if(name == 'list') return ()=>middlewares;
                if(name == 'sub') return function(){
                    let args = Array.from(arguments);
                    let parentPattern = (pattern||'')+args.shift();
                    args.forEach(fn => fn(getMethods(parentPattern)));
                };
                return function(){
                    addMiddleware(parseArguments(arguments,name,pattern));
                    return methods;
                };
            }
        });
        return methods;
    }
    

    return getMethods();
}

function runMiddlewares(mwArray,req,res){

    mwArray.push((req,res)=>res.end(res.body||''));

    const next = ()=>{
        let mw;
        while(!mw && mwArray.length > 0){
            mw = mwArray.shift();
        }
        mw && mw(req,res,next);
    }

    next();
}

function mwURLParse(options){
    return function(req,res, next){
        const parts = new URL(req.url,'http://'+(req.headers.host || 'derver.tld'));
        req.path = parts.pathname;
        req.host = parts.host;
        req.hostname = parts.hostname;
        req.port = parts.port;
        req.search = parts.search;
        req.query = Array.from(parts.searchParams).reduce((obj,[name,value])=>(obj[name]=value,obj),{});
        next();
    }
}

function mwJsonParse(options){
    return function(req,res, next){
        if(options.parseJson){
            const isJson = req.headers['content-type'] && !req.headers['content-type'].indexOf('application/json') ;
            
            if(isJson){
                let data = '';
                req.on('data', chunk => {
                    data += chunk;
                })
                req.on('end', () => {
                    try{
                        req.body = JSON.parse(data); 
                    }catch(err){
                        req.body = {};
                        console.log(err.message);
                    }
                    next();
                });
            } else next();
        } else next();
    }
}

function mwFile(options){
    return async function(req, res, next){
        req.file = path.join(options.dir,req.path);
        req.extname = path.extname(req.file);

        if(req.extname === ''){
            req.file = path.join(req.file,options.index);
            req.extname = path.extname(req.file);
        }

        req.exists = await isExists(req.file);

        if(options.spa && !req.exists && req.extname === path.extname(options.index)){
            console.log()
            let dir = path.dirname(req.file);
            do{
                dir = path.dirname(dir)
                req.file = path.join(dir,options.index);
                if(req.exists = await isExists(req.file)) break;
            } while(dir !== '.')
            
        }

        next();
    }
}

function mwSend(options){
    return function(req,res, next){
        res.send = function(message){
            let mime = 'text/plain';
            if(typeof message == 'object'){
                message = JSON.stringify(message);
                mime = 'application/json'
            }
            res.writeHead(200,{'Content-Type':mime});
            res.end(message);
        }
        next();
    }
}



function mwServer(options){
    return function(req,res, next){
        res.setHeader('Server', 'Derver/'+version);
        next();
    }
}

function mwStatic(options){
    
    return async function(req,res,next){
    
        if(!req.exists){
            options.log && console.log(c.gray('  [web] ')+req.url + ' - ' + c.red('404 Not Found'));
            res.writeHead(404, {'Content-Type': 'text/plain'});
            return res.end('Not found');
        }

        if(mime[req.extname]) res.setHeader('Content-Type', mime[req.extname]);

        res.body = await fs.readFile(req.file);
        options.log && console.log(c.gray('  [web] ')+req.url + ' - ' + c.green('200 OK'));
        next();
    }
}


function mwEncode(options){

    if(!options.compress) return null;

    return function(req,res,next){
        if(req.headers['accept-encoding']){
            if(req.headers['accept-encoding'].includes('br')){
               res.setHeader('Content-Encoding', 'br');
                res.body = zlib.brotliCompressSync(res.body);
            }else if(req.headers['accept-encoding'].includes('gzip')){
                res.setHeader('Content-Encoding', 'gzip');
                 res.body = zlib.gzipSync(res.body); 
            }  
        }
        next();
    }
}

function mwCache(options){

    if(!options.cache) return null;

    return function(req,res,next){
        if(typeof options.cache !== 'number') options.cache = 31536000;
        res.setHeader('Cache-Control', 'max-age='+options.cache);
        next();
    }
}

export function getRouteMatch(pattern,path){
    pattern = pattern.endsWith('/') ? pattern : pattern + '/';
    path = path.endsWith('/') ? path : path + '/';
    const keys = [];
    let params = {};
    let exact = true;
    let rx = pattern
       .split('/')
       .map(s => s.startsWith(':') ? (keys.push(s.slice(1)),'([^\\/]+)') : s)
       .join('\\/');

    let match = path.match(new RegExp(`^${rx}$`));
    if(!match) {
        exact = false;
        match = path.match(new RegExp(`^${rx}`));
    }
    if(!match) return null;
    keys.forEach((key,i) => params[key] = match[i+1]);

    return {
        exact,
        params,
        part:match[0].slice(0,-1)
    }
}

async function saveSID(options){
    const tmp = os.tmpdir();
    if(typeof options.remote !== 'string') return ()=>{};
    const file = path.join(tmp,'derver_'+options.remote);
    await fs.writeFile(file,JSON.stringify({host:options.host,port:options.port}));
    return async ()=>await fs.unlink(file);
}

async function isExists(file){
    try{
        await fs.stat(file);
        return true
    }catch{
        return false
    }
}
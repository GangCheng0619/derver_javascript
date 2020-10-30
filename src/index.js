import {startHTTPServer} from './lib/http';
import {startWatchers} from './lib/watch';
import {table} from './lib/table'

let default_options = {
    port: 7000,
    host: 'localhost',
    index: 'index.html',
    dir: 'public',
    watch: null
}

export async function tinds(options){
    const opt = Object.assign(default_options,options);

    try{
        await startHTTPServer(opt);
    }catch{
        process.exit(1);
    }
    
    startWatchers(opt);
}

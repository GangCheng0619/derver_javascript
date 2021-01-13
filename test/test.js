const {derver} = require('./../dist/derver.cjs.js');

const app = derver({
    dir: 'test/public',
    spa: true,
  //  watch: false,
  //  cache: true,
  //  compress: true,
    onwatch: (livereload,watcher,file,evt)=>{
        console.log('Hello',watcher,file,evt);
        // livereload.prevent(); livereload.console('Hello');
        // livereload.prevent(); livereload.error('Error text','Build error');
    }
})

app.get('/hello/:name',(req,res,next)=>{
    console.log('HELLO')
    res.writeHead(200);
    res.end('Hello,'+req.params.name+'!');
  });
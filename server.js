var http = require('http');


const server=http.createServer((req, res)=> {
  if(req.url=='/home'){
    res.end('running')
  }
  else {
    res.end('Not Founded')
  }});

  server.listen(1810,()=>{
    console.log('Connected')
  })

              
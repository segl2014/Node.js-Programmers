const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const readstream = fs.createReadStream('./static/example.png');
    res.writeHead(200,{'Content-type':'image/png'});
    readstream.pipe(res);
}).listen(3000);
const fs = require('fs');
const readStream = fs.createReadStream('./example4.txt','utf8');
const writeStream = fs.createWriteStream('example5.txt');
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
});
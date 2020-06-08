const fs = require('fs');
// fs.readFile('./largefile.txt',(err,file)=>{
//     if(err)
//     console.log(err);
//     else{
//         console.log(file);
//     }
// });

const readStream = fs.createReadStream('./largefile.txt','utf8')
readStream.on('data',(chunk)=>{
    console.log(chunk);
});
const fs = require('fs');
                 //create a file
// fs.writeFile('example.txt',"this is an example",(err)=>{
//     if(err)
//     console.log(err);
//     else{
//     console.log('File  successfully created ');
//     fs.readFile('example.txt','utf8',(err,file)=>{
//         if(err)
//         console.log(err);
//         else
//         console.log(file);
//     });
// }

// });                 

//fs.rename('example.txt','example2.txt',(err)=>{
//    if(err)
//    console.log(err);
//    else
//    console.log('successfully renamed the fill');
//});

// fs.appendFile('example2.txt','Some data being appended data to file',(err)=>{
// if(err)
// console.log(err);
// else
// console.log('successfully appended data to file');
// })
fs.unlink('example2.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('successfully deleted the file ');
})
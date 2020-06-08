 const fs = require('fs');
//   fs.mkdir('myfirstmodule',(err)=>{
//       if(err)
//      console.log(err);
//       else{
//           fs.writeFile('./myfirstmodule/example3.txt','123',(err)=>{
//               if(err)
//               console.log(err);
//               else{
//                   console.log('folder successfully created');
//               }
//           })
//       }
//  })

  fs.unlink('./example3.txt',(err)=>{
  if(err)
  console.log(err);
  else{
      fs.rmdir('myfirstmodule',(err)=>{
          if(err)
              console.log(err);
              else{
                  console.log('deleted folder');
              }
          });
      }    
  });

// fs.readdir('example',(err,files)=>{
//     if(err)
//     console.log(err);
//     else{
//         for(let file of files){
//             fs.unlink('./example/' + file,(err)=>{
//                 if(err)
//                 console.log(err);
//                 else{
//                     console.log('successfully deleted file ');
//                 }
//             });
//         }
//     }
// });
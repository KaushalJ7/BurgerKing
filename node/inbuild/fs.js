let fs = require('fs')

// fs.writeFile('myfile.txt','This is node fs writefile code',() =>{
//     console.log('File created')
// } )


// fs.appendFile('mytext.txt','This is node fs appendfile code \n',() =>{
//     console.log('File created')
// } )

// fs.readFile('mytext.txt','utf-8',(err,data) =>{
//     if(err) throw err;
//     console.log(data)
// } )

// fs.readFile('data.json','utf-8',(err,data) =>{
//     if(err) throw err;
//     console.log(data)
// } )

fs.rename('mytext.txt','mycode.txt',(err,data) =>{
    if(err) throw err;
    console.log('File renamed')
})

// fs.unlink('mycode.txt',(err,data) =>{
//     if(err) throw err;
//     console.log('File Deleted')
// })

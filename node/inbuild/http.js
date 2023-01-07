let http = require('http');

let server = http.createServer((req,res) =>{
    res.write('<h1> Hi from Nodejs server code </h1>')
    res.end()
})

server.listen(5679);
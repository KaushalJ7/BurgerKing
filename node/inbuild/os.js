let os = require('os');
console.log(os.platform())
console.log(os.arch())
console.log(os.freemem())
console.log(os.uptime())
console.log(os.cpus())
console.log(os.cpus().length)
console.log(`${os.cpus().length} Core`)

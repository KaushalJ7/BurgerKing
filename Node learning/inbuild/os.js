let os = require('os');
console.log(os.platform())
console.log(os.arch())
console.log(os.freemem())
console.log(os.uptime())
console.log(os.cpus())
console.log(os.cpus().length)
console.log(`${os.cpus().length} Core`)

Dell@DESKTOP-NA1AJ7C MINGW64 ~/Desktop/BurgerKing/Node learning/inbuild (main)
$ node os.js
win32
x64
2979045376
20110
[
  {
    model: 'Intel(R) Core(TM) i5-2390T CPU @ 2.70GHz',
    speed: 2694,
    times: { user: 1038156, nice: 0, sys: 663109, idle: 18409015, irq: 27218 }
  },
  {
    model: 'Intel(R) Core(TM) i5-2390T CPU @ 2.70GHz',
    speed: 2694,
    times: { user: 1050546, nice: 0, sys: 549828, idle: 18509718, irq: 6796 }
  },
  {
    model: 'Intel(R) Core(TM) i5-2390T CPU @ 2.70GHz',
    speed: 2694,
    times: { user: 1114531, nice: 0, sys: 667265, idle: 18328296, irq: 8343 }
  },
  {
    model: 'Intel(R) Core(TM) i5-2390T CPU @ 2.70GHz',
    speed: 2694,
    times: { user: 1046375, nice: 0, sys: 511046, idle: 18552671, irq: 5906 }
  }
]
4
4 Core

//1) Node runs on a server - not in browser ( backend not frontend )
//2) The console is the terminal window 
console.log('helo world')
//3) global object instead of window object 
console.log(global)
//4) 
//5) 
const os = require('os');
const path = require('path')
const {add, subtract, multiply, divide} = require('./math')

console.log(add(3, 4))
console.log(subtract(3, 5))
console.log(multiply(4, 6))
console.log(divide(6,2))

console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(os.hostname())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))





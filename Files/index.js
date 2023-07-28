const fs = require('fs');
const path = require('path')

/// read file 
fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8' ,(err, data) => {
    if (err) throw err;
    console.log(data)
})

fs.readFile(path.join(__dirname, 'lorem.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})
// write file 
// fs.writeFile(path.join(__dirname, 'starter.txt'), 'Nice to meessssst you', (err) => {
//     if (err) throw err;
//     console.log('Write complete')
// })

fs.readFile(path.join(__dirname, 'starter.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

// fs.appendFile(path.join(__dirname, 'lorem.txt'), 'Testing test', (err) => {
//     if (err) throw err
//     console.log('Append complete')
// })

// exit on uncaught errors 
process.on('uncaughtException', err => {
    console.error('there was an uncaught error:' + err)
    process.exit(1)
})

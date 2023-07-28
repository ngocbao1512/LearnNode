const fsPromises = require('fs').promises;
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname, 'lorem.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'lorem.txt'), 'Nice to meet you');
        const data_lorem = await fsPromises.readFile(path.join(__dirname, 'lorem.txt'), 'utf8')
        console.log(data_lorem)

    } catch (error) {
        console.error(error)
    }
}

fileOps()

/// read file 
// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8' ,(err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// fs.readFile(path.join(__dirname, 'lorem.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })
// write file 
// fs.writeFile(path.join(__dirname, 'starter.txt'), 'Nice to meessssst you', (err) => {
//     if (err) throw err;
//     console.log('Write complete')
// })

// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// fs.appendFile(path.join(__dirname, 'lorem.txt'), 'Testing test', (err) => {
//     if (err) throw err
//     console.log('Append complete')

//     fs.rename(path.join(__dirname, 'newReply.txt'), path.join(__dirname, 'newsReply.txt'), (err) => {
//         if (err) throw err
//         console.log('rename success')
//     })
// })

// exit on uncaught errors 
process.on('uncaughtException', err => {
    console.error('there was an uncaught error:' + err)
    process.exit(1)
})

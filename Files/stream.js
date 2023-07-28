const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname, 'starter.txt'), {encoding: 'utf8'})

const ws = fs.createWriteStream('./new-lorem.txt');


// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

rs.pipe(ws)
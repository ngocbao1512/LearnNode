// npm i nodemon -g 
// nodemon server
const {format} = require('date-fns');

console.log(format(new Date(), 'yyyyMMdd\tHH::mm:ss'))
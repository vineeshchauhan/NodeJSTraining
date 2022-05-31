const path = require('path')
const {getHeapStatistics} = require('v8')// destructing of the module
const util = require('util')

console.log(__dirname);
console.log(path.basename(__dirname));
console.log(__filename);
console.log(path.basename(__filename));

const uploadPath = path.join(__dirname,'www','files','uploads')

console.log(uploadPath)

util.log(getHeapStatistics());

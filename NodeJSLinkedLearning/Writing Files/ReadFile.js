var fs = require('fs');
var data = require('./data.json');

console.log(data);
console.log(data.name);

//access file using require
fs.readFile('./data.json','utf-8',(err,data) => {
    var data = JSON.parse(data);
    console.log(data);
    console.log(data.name);
});

//access using require
//console.log(data);
//console.log(data.name);
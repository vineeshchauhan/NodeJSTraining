fs = require('fs');

function callbackfunc(err,data){
    console.log('data:'+data);
}
fs.readdir('c:/',callbackfunc);


console.log('this comes after');
var fs = require('fs');

var data = {
    name : 'Vineesh'
}

fs.writeFile('data1.json',JSON.stringify(data) ,(err,data) => {
    console.log(err)
});
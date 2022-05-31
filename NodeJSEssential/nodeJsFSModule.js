const fs = require('fs')


fs.readdir('c:',(err,files) => {
    if(err) 
        throw err;

    console.log(files)    
})


fs.readFile('../readme.md','UTF-8',(err,buffer) => {
    if(err)
        throw err;

    console.log(buffer)
})

const text = `

This is new file created via file system module of NodeJS.

It is being created in lib folder with name writefile.txt`;

fs.writeFile('./lib/writefile.txt',text, () => {
    console.log('file created')
});


const textAppend = `

Here is example of append

`;


fs.appendFile('./lib/writefile.txt',textAppend,() => {
    console.log('file appended');
});
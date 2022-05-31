console.log(process.pid)
console.log(process.versions.node)


console.log(process.argv)// node .\globalProcess.js Vineesh Chauhan

//Array destructuring
const [,,firstName,lastName] = process.argv; //// node .\globalProcess.js Vineesh Chauhan

console.log('The name is '+firstName+' '+lastName)



const username = grab("--username")
const password = grab("--password")

// function grab(flag) {}
const grab = flag => {
    const arr = process.argv;
    let index = arr.indexOf(flag)+1;
    return arr[index];
};

console.log('The name is '+ username +' '+password)



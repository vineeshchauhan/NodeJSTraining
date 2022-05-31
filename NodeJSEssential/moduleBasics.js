module.exports = "Vineesh";


let counter = 0;

const inc = () => counter++;
const dec = () => counter--;

const getCounter = () => {
    return counter
}



module.exports ={
    inc,
    dec,
    getCounter
}
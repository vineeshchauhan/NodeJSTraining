const timeOutInterval = 3000;

console.log(`The time out interval is set to ${timeOutInterval}`)

const done = () => console.log('done');

setTimeout(done,timeOutInterval)
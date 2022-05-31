const timeOut = 5000;
const intervalTimeOut = 500;
let val = 0;


const runn = (interval) => {
   // console.log(interval)
    val =  val + intervalTimeOut ;
    const percentage = (val/timeOut)*100;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(` ${percentage}% is completed...`);
    if(val == timeOut){
        clearInterval(interval);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        console.log('done');
    }
}

 interval = setInterval(() => runn(interval), intervalTimeOut);

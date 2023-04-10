function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('Pass Callback function!');
  }
  if(!seconds || seconds < 0) {
    throw new Error ('Wrong seconds');
  }
  setTimeout(callback, seconds * 1000);
}
try {
  runInDelay(() => {
    console.log('Timer completed');
  },2);
}
catch (error) {} // 'Print 'Timer completed' in 2secs'

function runInDelay2(seconds2) {
  return new Promise((resolve, reject) => {
    if(!seconds2 || seconds2 <0) {
      reject(new Error('Seconds is smaller than 0!'))
    }
    setTimeout(resolve, seconds2 * 5000);
  });
}

runInDelay2(2)
.then(() => console.log('Timer Completed!!')) 
.catch(console.error)
.finally(()=> console.log('Done!'))

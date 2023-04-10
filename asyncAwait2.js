async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000)
  });

  let result = await promise; // Wait until Promise is done (*)

  alert(result); // "Done!"
}

f();

	
function multiply5 (number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = number * 5;
 
      console.log(result);
      resolve(result);
    }, 1000);
  });
}
 
Promise.all([
  multiply5(5),
  multiply5(10),
  multiply5(20)
]).then(result => {
  console.log('result', result);
});



function multiply2 (number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = number * 2;
 
      reject(result);
      console.log('result', result);
    }, 1000 * number);
  });
}
 
Promise.race([
  multiply2(3),
  multiply2(2),
  multiply2(1)
]).then(result => {
  console.log('final result', result);
}).catch(result => {
  console.log('final error', result);
  throw result;
});
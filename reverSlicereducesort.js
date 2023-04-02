const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals);

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


console.log(animals.splice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals);
// Expected output: Array ["ant", "bison"]



const arr = [1, 2, 3, 4, 5]
arr.reduce((x,y) => {
  console.log(`${x}+${y} = ${x+y}`)
  return x+y
})
const sum=(x,y) => x+y;
const result=arr.reduce(sum);
console.log(result)

const average = (sum, val, i, arr)=>{
  sum += val;
  return i === arr.length - 1? sum / arr.length : sum;
}
console.log(arr.reduce(average))

const nums = [50, 10, 20, 80, 40]
const max = (x,y) => x > y? x : y;
console.log(nums.reduce(max))

const arr2 = [1, 2, 3, 4, 5]
arr2.reduceRight((x,y) => {
  console.log(`${x}+${y} = ${x+y}`)
  return x+y
})

let str = "hello"
const reverse = s => s.split("").reduceRight((x,y)=>x+y);
console.log(reverse(str))


const arr3 = [ 'conan', 'apples', 'apple', 'zone', 'park', 'astronaut'];

arr3.sort();
arr3.sort((a, b) => {
  if(a > b) {return 1;}
  if(a < b) {return -1;}
  return 0;
});



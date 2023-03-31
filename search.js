const fruits = ['apple', 'banana', 'pear', 'orange']
console.log(fruits.indexOf('banana'));
 // 1 
// ["apple", "banana", "pear", "orange"]
console.log(fruits.indexOf('strawberry'));
 // -1

console.log(fruits.includes('banana'));
 // true
console.log(fruits.includes('strawberry'));
 // false

console.clear();
fruits.push('apple')
console.log(fruits.indexOf('apple'));
 // 0
console.log(fruits.lastIndexOf('apple'));
 // 4
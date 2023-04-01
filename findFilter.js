const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));    // { name: 'cherries', quantity: 5 }


const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }



const ages = [32, 33, 16, 40];
const result2 = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result2);
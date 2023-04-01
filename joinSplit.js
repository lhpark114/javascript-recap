const chocolate = ['White', 'Belgium', '$10'];
console.log(chocolate.join());
console.log(chocolate.join(''));
console.log(chocolate.join('-'));


const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]


const myString2 = "Hello 1 word. Sentence number 2.";
const splits2 = myString2.split(/(\d)/);

console.log(splits2);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]


let text = "How are you doing today?";
//const myArray = text.split(" "); 
//const myArray = text.split(" ");
//let word = myArray[1];
// const myArray = text.split("");
const myArray = text.split(" ", 3);
console.log(myArray);
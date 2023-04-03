// slice // 
array.slice(fromElement, untilElement);
const newArray = array => array.slice(0,3)
newArray([1,2,3,"hello world",4,12,true])       // [1,2,3]


// splice //
array.splice(indexToStart, numberofElementsToBeDeleted, elementToBeAdded1, elementToBeAdded2...);



// 1) Delete //
array.splice(indexToStart, numberofElementsToBeDeleted);

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
daysOfWeek.splice(1, 3);
console.log(daysOfWeek);     // [ 'Monday', 'Friday' ]




// 2) Add //
array.splice(indexToStart, 0, elementToBeAdded1, elementToBeAdded2...);

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
daysOfWeek.splice(2, 0, 'WOW');
console.log(daysOfWeek);                  // [ 'Monday', 'Tuesday', 'WOW', 'Wednesday', 'Thursday', 'Friday' ]




// 3) Delete and Add //
array.splice(indexToStart, numberofElementsToBeDeleted, elementToBeAdded1, elementToBeAdded2...);

const daysOfWeek = ['Monday', 'Tuesday', 'March', 'April', 'Wednesday', 'Thursday', 'Friday'];
daysOfWeek.splice(2, 2, 'WOW', 'HEHE');
console.log(daysOfWeek);                 // [ 'Monday', 'Tuesday', 'WOW', 'HEHE', 'Wednesday', 'Thursday', 'Friday' ]



// split //
string.split(separator, limit);

const myString = 'my name is chocolate strawberry';
myString.split(" ");         // [ 'my', 'name', 'is', 'chocolate', 'strawberry' ]
myString.split("");          // [ 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'c',  'h', 'o', 'c', 'o', 'l', 'a', 't','e', ' ', 's', 't', 'r', 'a', 'w', 'b', 'e', 'r', 'r', 'y' ]
myString.split(" ", 3);      // [ 'my', 'name', 'is' ]
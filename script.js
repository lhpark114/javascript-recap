
let fruits = [
  "🍓",
  "🍌",
  "🥝",
  "🍇",
  "🍏",
  "🍋",
  "🍉",
];

// 방법 1 // 
function printFruit(item) {
  console.log(item)
}

fruits.forEach(printFruit)

// 방법 2 // 
fruits.forEach(function (item) {
  console.log(item)
})

// 방법 3 -- es6 // 
fruits.forEach((item) => {console.log(item)})

// return 'index'? // 
fruits.forEach((item, index) => {console.log(item, index)})

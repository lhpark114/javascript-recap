

// push //
//loves.push('💛');
//console.log(loves);
// ["💕", "🧡", "💛"]

// unshift // 
//loves.unshift('💙')
//console.log(loves);
// ["💙", "💕", "🧡"]
// concat //
// const stars = ['✨', '🎇']
// const loveStars = loves.concat(stars);
// console.log(loveStars);
// ["💕", "🧡", "✨", "🎇"]


// pop //
//loves.pop();
//console.log(loves);
// ["💕"]

// shift //
//loves.shift();
//console.log(loves);
// ["🧡"]

const lovesStars = ['💕', '🧡', '💛', '✨', '🎇'];

// splice // 
//lovesStars.splice(3);
//console.log(lovesStars);
// ["💕", "🧡", "💛"]

//lovesStars.splice(1, 2);
//console.log(lovesStars);
// ["💕", "✨", "🎇"]

lovesStars.splice(3, 1, '💞', '💚');
console.log(lovesStars);
// ["💕", "🧡", "💛", "💞", "💚", "🎇"]
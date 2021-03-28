// function isEven(ele) {
//   if (ele % 2 === 0) {
//     return true;
//   }
//     return false;
// }

var isEven = (ele) => {
  return ele % 2 === 0;
};

//console.log(isEven(2));

// var result = [2, 3, 4, 6].every(isEven);
//

// var result = [2, 4, 6, 8].every((e) => {
//   return e % 2 === 0;
// });

//Simplefied arrow function
var result = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result);

// // var returnedValue = Math.max(2, 3, 5, 7, 9);
// // console.log(returnedValue);

// function sum(a, b) {
//   return a + b;
// }

// var nums = [2, 3];
// //spread operator
// console.log(sum(...nums));

// //Reset operator

// function sumTwo(a, b, ...args) {
//   let multi = a * b;
//   let sum = 0;

//   for (const arg of args) {
//     sum = sum + arg;
//   }
//   return [sum, multi];
// }
// console.log(sumTwo(3, 4, 1, 1, 1, 1));


function sumOfNums(...args){
  let sum = 0 ;
  for(const arg of args){
    sum = sum + 5;
  }
  return sum;
}

console.log(sumOfNums(3,4,5,6,));





















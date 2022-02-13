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


// function sumOfNums(...args){
//   let sum = 0 ;
//   for(const arg of args){
//     sum = sum + 5;
//   }
//   return sum;
// }

// console.log(sumOfNums(3,4,5,6,));

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
   
  orderPasta : function(ing1, ing2, ing3) {
      console.log(`Order pasta with these 3 ingredients ${ing1}, ${ing2}, ${ing3}`);
  }

};

const arr = [7, 8, 9];
const arr1 = [12, 13, 14];

console.log(...arr, ...arr1)
const ingredients = ['apple', 'chocklet', 'grapes'];

restaurant.orderPasta(...ingredients);






















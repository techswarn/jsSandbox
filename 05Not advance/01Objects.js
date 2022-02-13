// var User = function (name, courseCount) {
//   this.name = name;
//   this.courseCount = courseCount;
//   this.getCourseCount = function () {
//     console.log(`The course count is ${this.courseCount}`);
//   };
// };

// User.prototype.getFirstname = function () {
//   console.log(`My first name is ${this.name}`);
// };

// var swarn = new User("Swarn", 3);
// console.log(swarn);
// //swarn.getFirstname();

// if (swarn.hasOwnProperty("namee")) {
//   swarn.getFirstname();
// }

// var Person = function (name, dob, job) {
//   this.name = name;
//   this.dob = dob;
//   this.job = job;
//   this.calAge = () => {
//     return 2020 - this.dob;
//   };
// };

// var swarn = new Person("Swarn", 1993, "Web developer");
// console.log(swarn.calAge());
// console.log(swarn);



//Creating object swarn

// var Person = function(name, dob, job){
//   this.name = name;
//   this.dob = dob;
//   this.job = job;
// this.calAge = () => {
//   return 2020 - this.dob;
// }
// }

// var swarn = new Person("Swarn", 1993, "Engineer");
// console.log(swarn)
// console.log(swarn.calAge())

///////////////////////Looping through objects

//Looping through property names
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto']
}

for (const days of Object.keys(openingHours)) {
    console.log(days);
}

//Property names
const properties = Object.keys(openingHours);
console.log(properties);

//Values
const values = Object.values(openingHours);
console.log(values);

//entries
const entries = Object.entries(openingHours);
console.log(entries);

//Loop through
for( const [key, value] of entries){
    console.log(key)
    console.log(value)
    console.log(`Restaraunt is onpen on ${key} at ${value?.open} and close at ${value?.close}`)
}



















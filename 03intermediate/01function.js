// function hello(name) {
//   console.log(`My name is ${name}`);
// }

// hello("Swarn");

// function calcAge(curYear, dob) {
//   return dob - curYear;
// }

var calcAge = (curYear, dob) => {
  return curYear - dob;
};

console.log(calcAge(2020, 1993));

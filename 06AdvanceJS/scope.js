// console.log(name);

// var name = "Swarn"; // retruns undefined
// let name = "Swarn"; // retruns error

if (true) {
  var name = "Swarn";
}
console.log(name); // name can be access when it is declared using var

if (true) {
  let name = "Sam";
}
console.log(name); // returns error since variables reclared using let is not available outside of scope

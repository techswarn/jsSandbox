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

var Person = function(name, dob, job){
  this.name = name;
  this.dob = dob;
  this.job = job;
this.calAge = () => {
  return 2020 - this.dob;
}
}

var swarn = new Person("Swarn", 1993, "Engineer");
console.log(swarn)
console.log(swarn.calAge())


















//bind creates a reference to the method and call directly calls a method
// const swarn = {
//   firstname: "Swarn",
//   lastname: "Suvarna",
//   courseCount: 3,
//   getUserDetails: function () {
//     console.log(
//       `My name is ${this.firstname} ${this.lastname} and I have completed ${this.courseCount} courses`
//     );
//   },
// };

// swarn.getUserDetails();

// const dj = {
//   firstname: "dwayne",
//   lastname: "Johnson",
//   courseCount: 4,
// };

// swarn.getUserDetails.bind(dj)();
// swarn.getUserDetails.call(dj);

var swarn = {
  name: "Swarn",
  dob: 1993,
  calcAge: function () {
    return 2020 - this.dob;
  },
};

console.log(swarn.calcAge());

var suraj = {
  name: "Suraj",
  dob: 1994,
};

console.log(swarn.calcAge.bind(suraj)());

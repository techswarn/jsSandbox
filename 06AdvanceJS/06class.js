// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   courseList = [];
//   getInfo() {
//     return { name: this.name, email: this.email };
//   }

//   enrolledCourses(name) {
//     this.courseList.push(name);
//   }
//   getCourseList() {
//     return this.courseList;
//   }
// }

// module.exports = User;

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea = () => {
    return this.height * this.width;
  };

  getArea() {
    return this.calcArea();
  }
}

const square = new Rectangle(5, 5);

console.log(square.calcArea());

// Static methods

class Person {
  constructor() {
    this.name = name;
    this.dob = dob;
    this.job = job;
  }

  static calcAge() {
    return "We are developers";
  }
}

console.log(Person.calcAge());

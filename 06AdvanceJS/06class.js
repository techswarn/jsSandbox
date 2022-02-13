// // class User {
// //   constructor(name, email) {
// //     this.name = name;
// //     this.email = email;
// //   }

// //   courseList = [];
// //   getInfo() {
// //     return { name: this.name, email: this.email };
// //   }

// //   enrolledCourses(name) {
// //     this.courseList.push(name);
// //   }
// //   getCourseList() {
// //     return this.courseList;
// //   }
// // }

// // module.exports = User;

// // class Rectangle {
// //   constructor(height, width) {
// //     this.height = height;
// //     this.width = width;
// //   }

// //   calcArea = () => {
// //     return this.height * this.width;
// //   };

// //   getArea() {
// //     return this.calcArea();
// //   }
// // }

// // const square = new Rectangle(5, 5);

// // console.log(square.calcArea());

// // // Static methods

// // class Person {
// //   constructor() {
// //     this.name = name;
// //     this.dob = dob;
// //     this.job = job;
// //   }

// //   static calcAge() {
// //     return "We are developers";
// //   }
// // }

// // console.log(Person.calcAge());


// //Fundamental principles
// //Abstraction : Hide details that not matter
// //Encapsulation: keep some properties and methods private inside the class so that they are not accessible from outside the class.
// //some methods can be exposed as public interfaces
// //Inheritance: Child class as can override a method from parent class, 

// // Older way of implementation
// //All object in javascript is linked to prototypes
// //Constructor way


// //Creates empty object
// //function is called: this = {}
// 'use strict'

// const Person = function(firstname, dob) {
//   //Instance properties
//   this.firstname = firstname;
//   this.dob = dob;

//   //Adding methods
//   //Never call a method inside a constructor function
//   // TO solve this we use protoype inheritance
//   // this.calcAge = function() {
//   //   return 2022 - this.dob
//   // }
// // }

// // const personObj = new Person('Swarn', 1993);

// // //Prototype inheritance
// // Person.prototype.calcAge = function(){
// //   return 2022 - this.dob
// // }

// // console.log(personObj)
// // console.log(personObj instanceof Person);
// // console.log(personObj.calcAge())
// // console.log(personObj.__proto__)

// //Classes
class Account {
  constructor(firstname, lastname, pin){
    this.firstname = firstname;
    this.lastname = lastname;
    this._pin = pin;
    this._movements = [];
  }

  deposite(val) {
    this._movements.push(val)
    return this;
  }

  widthdraw(val){
    this.deposite(-val)
    return this;
  }

  static info(){
    console.log('this is a acccount class')
  }
}

const jonas = new Account('Jonas', 'S', 111);
jonas.deposite(1000)
jonas.widthdraw(-100)
console.log(Account.info())





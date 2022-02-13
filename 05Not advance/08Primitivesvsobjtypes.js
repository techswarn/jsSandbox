//Primitive types

let myName = "swarn";
let friendsName = myName;

myName = "suraj";

console.log(myName);
console.log(friendsName);

//Objects that is reference types

const swarn = {
    firstname: "swarn",
    lastname: "suvarna",
    age: 27,
}

const suraj = swarn;
swarn.age = 40;

console.log("swarn : ", swarn);
console.log("suraj: ", suraj);

//Object.assign
//only shallow copy is possible, not deep copy
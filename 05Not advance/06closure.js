// function init() {
//   var firstName = "Swarn";
//   console.log("Init is executing");
//   function getFirstName() {
//     console.log(firstName);
//   }
//   return getFirstName;
// }

// var name = init();
// name();

// function add(x) {
//   return function addto(y) {
//     return x + y;
//   };
// }

function multiply(a) {
  return function multiplyTo(b) {
    return a + b;
  };
}

var result = multiple(3);


// var result = add(3);
// console.log(result(2));
// console.log(add(3)(3));

//Function are treated as first class function, you can pass a funtion to a function and also retrive from the samme funtion
//self executing anonymous function or IFE

//Normal function:

function sayHello() {
  console.log("Normal function call");
}
sayHello();

//Self executing anonymos function

(function () {
  console.log("Self executing anonymous function");
})();

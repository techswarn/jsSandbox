const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);
// console.log("hello");

const getColor = (selected) => {
  return window.getComputedStyle(selected).backgroundColor;
};

var color = getColor(cyan);

// cyan.addEventListener("mouseenter", function (e) {
//   center.style.background = color;

//   e.preventDefault();
// });

const magicColor = (element, color) => {
  return element.addEventListener("mouseenter", function (e) {
    center.style.background = color;
    e.preventDefault();
  });
};

magicColor(red, getColor(red));
magicColor(cyan, getColor(cyan));
magicColor(violet, getColor(violet));
magicColor(pink, getColor(pink));
magicColor(orange, getColor(orange));

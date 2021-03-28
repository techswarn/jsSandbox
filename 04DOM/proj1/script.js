var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;
setInterval(function () {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 0.5);

setTimeout(function () {
  followers.innerHTML = "Followers on Instagram";
}, 4100);

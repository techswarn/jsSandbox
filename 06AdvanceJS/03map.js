var myMaps = new Map();

myMaps.set(1, "India");
myMaps.set(2, "USA");
myMaps.set(3, "JAPAN");
myMaps.set(4, "RUSIA");

console.log(myMaps);

// for (let key of myMaps.keys()) {
//   console.log(`key is ${key}`);
// }

// for (let value of myMaps.values()) {
//   console.log(`value is ${value}`);
// }

for (let [key, value] of myMaps) {
  console.log(`Key is ${key} with Value ${value}`);
}

myMaps.forEach((value) => {
  console.log(`${value}`);
});

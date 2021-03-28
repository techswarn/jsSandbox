var name = "Swarn";
console.log(`Line number 2 ${name} `);

function sayName() {
  var name = "Suraj";
  console.log(`Line number 6: ${name} `);

  function sayNametwo() {
    var name = "Anusha";
    console.log(`Line number 10 : ${name}`);
  }
  sayNametwo();
}
sayName();

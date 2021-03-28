const User = {
  name: "",
  getUserName: function () {
    return `My name is ${this.name}`;
  },
};

const me = Object.create(User);
console.log(me);
me.name = "Swarn";
console.log(me.getUserName());

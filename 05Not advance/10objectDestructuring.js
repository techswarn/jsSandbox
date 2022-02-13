const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

    orderDelivery : function({a,b,c}) {
        console.log(obj);
    }
  };

  const {name : restarautName, openingHours: hours} = restaurant;

  console.log(restarautName, hours);


//giving default values
const { menu = [], starterMenu: starter = []} = restaurant;

console.log(menu, starter)

//Mutating variables 
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:25};
({a,b} = obj)

//nested
const {fri : {open, close}} = hours;
console.log(open, close)

const {openingHours: {thu: {open : openhour}}} = restaurant;
console.log(openhour);

restaurant.orderDelivery({
    a:1,
    b:2,
    c:3
});

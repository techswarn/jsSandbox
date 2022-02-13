//Datastructure MAPS
//Differece between MAPS and keys are MAPS can have keys with any type.

const restaurant = new Map();
restaurant.set('name', 'sadanandh')
restaurant.set('1', 'surathkal, kulai')
restaurant.set('2', 'kuloor, krisnapura').set('open', 11).set('close', 10).set(true, 'We are open :)').set(false, 'We are closed :(')
console.log(restaurant.get('name'));
console.log(restaurant.get(false))


//check key
console.log(restaurant.has('categories'));
restaurant.delete('2')
console.log(restaurant)

//MAP iteration

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'try again']
])

console.log(question);

//Convert objects to map since both structure is array of arrays
'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const ourRestaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}
const hourMap = new Map(Object.entries(openingHours))

console.log(hourMap)

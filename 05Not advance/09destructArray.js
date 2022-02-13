'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}  

let [first, second] = restaurant.categories;
console.log(first, second);

//swapping us descruting

[first, second] = [second, first];
console.log(first, second);

//default values
const [p=1, q=1, r=1] = [8, 9]
console.log(p, q, r)

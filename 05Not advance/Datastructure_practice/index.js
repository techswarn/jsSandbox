const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    OrderDelivery : function({time, place, name}){
        console.log(`I will deliver the food at ${time} at ${place}
                     for ${name}`)
    }
}

restaurant["flatNo"] = 256;

/////////////////////////////////////////////////Array destructing
const {name, location, starterMenu} = restaurant;
// console.log(name);
// console.log(location);
// console.log(starterMenu);

const {name: n , location: place, starterMenu: menu} = restaurant;
// console.log(n, place, menu);
restaurant.OrderDelivery({
    time : "12AM",
    name: "Swarn",
    place: "Mangalore"
})


const orderSet = new Set([
    'Swarn',
    'sam',
    'carlos',
    'sam',
    'jeevan'
])

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('carlos'))
console.log(orderSet.add('garlic bread'));
console.log(orderSet.delete('sam'));
console.log(orderSet.add('garlic bread'));

//main use case is to remove duplicate valuees from arrays
const staff = ['sam', 'cooler', 'mike', 'carlos', 'mike', 'cooler', 'anotony'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
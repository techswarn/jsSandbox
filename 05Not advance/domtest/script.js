
// const person = {
//     name : "Swarn",
//     dob: 1993,
    
//     calcAge: function() {
//         console.log(this);
//     },

//     printname: () => {
//         console.log(this);
//     }
// }


// person.printname();

console.log(this);

const calcAge = function(dob) {
 console.log(2022 - dob);
 console.log(this)
}

calcAge(1993)

const calcAge2 = (dob) => {
    console.log(2022 - dob)
    console.log(this)
}

calcAge2(1993);

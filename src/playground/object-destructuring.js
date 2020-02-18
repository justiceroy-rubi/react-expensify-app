// const person = {
//     name: 'Jumac',
//     age: 39,
//     location: {
//         city: 'Cebu',
//         temp: 40
//     }
// };

// const name = person.name;
// const age = person.age;
// Simple destructuring
// const { name, age } = person;

// Setting default: name = 'Anonymous'
// const { name = 'Anonymous', age } = person;

//Combining setting default and renaming variable
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${name} is ${age}.`);

//simple destructuring
//const { city, temp } = person.location;

//renaming temp to temperature
//temp: temperature

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

const book = {
    title: 'Ego is the Enemy', 
    author: 'Ryan Holiday', 
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);
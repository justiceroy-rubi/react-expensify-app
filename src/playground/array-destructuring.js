const address = ['1907 San Miguel, Apas', 'Cebu City', 'Cebu', '6000'];

//All items in array
//const [street, city, state, zip] = address;

//Take only city and state, (2nd, 3rd)
//const [, city, state] = address;

//Setting default
const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumSize] = item;

console.log(`A medium ${itemName} costs ${mediumSize}`);
//Modules

// const secret = 'super secret';
// const john = 'john';
// const peter = 'peter';

// const sayHi = (name)=>{
//     console.log(`hello there ${name}`)
// }

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');

require('./7-mind-grenade');
// console.log(names);


// console.log(data);


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
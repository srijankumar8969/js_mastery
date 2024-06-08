const score = 400
// console.log(score);

const balance = new Number(100)  //constructor function
// console.log(balance);

// console.log(balance.toString().length); //first toString convers the number to a string and thus the properties of string can be applied to it
// console.log(balance.toFixed(1));  //this gives value upto decimal place fixed upto 1 after decimal because the input within the perenthesis is 1

const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(5));  -->1123.9 //this returns precision value upto 4 numbers and rest others are round of to nearest decimal
// console.log(otherNumber.toPrecision(3)); -->1.12e+3 is returned

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  //this converts the number to indian standard representation 10,00,000  (if no parameter passed then it simply converts to us standards 1,000,000)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10  
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //

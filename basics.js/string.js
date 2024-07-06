const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  //this is an old way of writing js and not liked nowaday and thus we use string integpolation

console.log(`Hello my name is name is ${name} and my repo count is ${repocount}`)

const gameName = new String('hitesh-hc-com')  // this is constructor function method of string generation//but typeof the thing generates will be object, but if it is declared by above method then it will be string

// console.log(gameName[0]);
// console.log(gameName.__proto__); //this show all the properties available with

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  //returns char at a position within the length of the string and returns nothing otherwise and if you are pointing at  the gap within the string
console.log(gameName.indexOf('t'));  //this gives the position of t and returns -1 if the char is not present in the string

const newString = gameName.substring(0, 4) //position 0 to position 3 tak ke string return kar do last thing return nahi hoti
console.log(newString);

const anotherString = gameName.slice(-8, 4) //same as substring only difference is that it can also has -ve inputs in that case for that negative position it starts from the end of the string and then goes in the opposite direction
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //this function simply removes the starting and end whitespaces from the string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) 

console.log(url.includes('sundar'))  //is that present in the string

console.log(gameName.split('-'));  //this converts the string in an array based on the input in the paranthesis

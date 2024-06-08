// array  //it is an object, it cause shallow copies (the variable with which it is copied share the same reference point)

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) //constructor function
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //this adds the element at the starting of the array and thus is not an optimized way of adding element to an aray as the elements need to be shifted for this purpose 
// myArr.shift()  //removes element from the start of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  //this conversts the array into a string

// console.log(myArr);  //remains as it is
// console.log( newArr);  //it is an string


// slice, splice alike slce splice cause the selected part tobe removed from the original array and the second input in it is the number of elwments to be selected starting from the index associated with the first input

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr);
console.log(myn2);



const marvel_heros = ["thor", "Ironman", "spiderman"]  
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //whole dc_heroes got pushed as a separate array into the marvel_heroes

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  //... is the spread operator that separates each element of the arrya as an individual element

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //array ke ander se sub arrays ke layering hatata hai aur jo iske andetr parameter hai wo depth hai jitne ander tak ke arrays ko kholna hai
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))  //returns a boolean value according to wheather its an array or not
console.log(Array.from("Hitesh"))  // makes array from string only one input is allowd
console.log(Array.from({name: "hitesh"})) // interesting // if not spscified to make array from the key or value it cant make an array and whwnever Array.from cant make an array it returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //this makes an array from any kind of and any no. of variables inside

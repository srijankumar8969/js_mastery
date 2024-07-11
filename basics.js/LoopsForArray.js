// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {  //each element of arr is getting targeted one after the other in order of increasing index by num.
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()  //unique values ko hold karta hai and order ko maintain rakhta hai
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {  // is tarike se key and value uniquely hold ki jati hai.
    // console.log(key, ':-', value);
}

for (const mapElem of map) {  // is tarike se key and value uniquely hold ki jati hai.
    // console.log(MapElem);  //MapElem contain arrays with map keys and values as array elements 
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  //object ke case me ye iteratable by for of loop
//     console.log(key, ':-', value);
// }

                                                                                  loops of object
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {  //array hold athe data  as key (index) value pair thus this code will work
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);   // this is not iteratable becaue Map doesn't support for in loop
// };
                                                                            for each loop
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  //reference of the function dena hai usko execute nahi kar dena hai

// coding.forEach( (item, index, arr)=> {   //har  ek  value, index, complete array can be accessed.
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

// Dates  measeured from January 1, 1970

let myDate = new Date()
// console.log(myDate.toString());Mon May 13 2024 08:37:09 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); Mon May 13 2024 
// console.log(myDate.toLocaleString()); 5/13/2024, 8:37:09 AM
// console.log(typeof myDate); object 

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)//year month day hour min sec 
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")  //mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  //declaration ka time from January 1, 1970 in ms
// console.log(myCreatedDate.getTime());  //declaration ka time from January 1, 1970 in ms
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //+1  is done so that the end user doesn't get confused as months starts from 0 is js
console.log(newDate.getDay()); //konsa day hai and sunday is 0
console.log(newDate.getDate());//date kya hai uska original number

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { //first one is timezone and { } ke ander different properties jo access kar sakte hai uski values ke roop me uski type likhte hain
    weekday: "long",                 
    month:'short'
}) //this is one of the ast ways of getting date

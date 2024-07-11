
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){  //functions ke ander parameters ka koi data type nahi hota isliye agar kabhi number ki jagah kio string bhi pass karde to ye usko bhi add kane ki kosis karega and baad me if it will not be able to do that then returns NaN so to resist this types of type related errors we use Typescript 
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result                                     //return karte hi program function se nikal kar us point par aa jata hai jaha se use call kiya gaya tha
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  //returned value result ke ander aajayegi

// console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){                                         //agar username me user koi arguement pass nahi karega toh uski value undefined rahegi and undefined value ko false mana jata hai
        console.log("PLease enter a username");
        return                                                //return type na hone ke karan function se agar kuch bhi return na karo toh bhi chalta hai iscase me undefined return hota hai
    }
    return `${username} just logged in`
}

function loginUserMessage(username = "sam"){  // the method of default parameter is against the case when the user doesn't pass any value
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){   //... function ke ander rest operator ka kaam karta hai aur iska use hota hai agar aapko ye pata nahi ki kitni values aane wali hai rest operator ke ander jitni bhi vslues user ke aur se pass ki jati hai wo usko ek array me band kar deta hai
    return num1
} // if more than two paramets are there then we will have 

// console.log(calculateCartPrice(200, 400, 500, 2000))  // 200 aur 400, val1 aur val2 me chale gaye and rest sari cheezen rest operator ke ander chali jayegi

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

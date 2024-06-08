// Immediately Invoked Function Expressions (IIFE)  //we want a function to get exicuted with creation and don't get influenced by the global scope thats why we write IIFE

(function chai(){  //ye ek named IIFE hai
    // named IIFE
    console.log(`DB CONNECTED`);
})chai();  //first paranthesis function ka declaration hai aur uske just bahar wala uska execution call hai thus agar koi parameter pass karna hai to yaha se kar sakte hain. Also since invoked function ko pata nahi rehta hai ki funcction end kaha karna hai thus hum ; use karte hain 

//IIFE ko bahar se call nahi kiya ja sakta hai and thus iske naam ki bhi need nahi hoti hai

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

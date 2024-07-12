//a promise is an object which represents the eventual compleion of an async operation and its resulting value

const promiseOne = new Promise(function(resolve, reject){  // a new instance of Promise is created a function is called inside it means Promise gives the function a power to get moved from the call stack and make its own execution context separate from the call stack and when the work is completed the reference return tothe mai call stack 
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()  //connects to .then()
    }, 1000)
});

//when a promise is created its execution stats to occur at that time but what to do after the work is done is not known by it thus we use .then(()=>{})  //.then() is a higher order function that takes a callback function input that executes when the work is done and the insider function is not asynchronous  //aslo for the .then mthod to work you need to run resolve() inside the promise 

promiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

  //what ever is treanfereed as parameter in he resolve is caught as arguement in the callback function inside .then()

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')  //casing the .catch() to run 
        }
    }, 1000)
})
// in this way we can cause the chaining of the .then() and .catch() the thing returned from one .then() goes to the next one and first the .then or .catch will be executed
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  //no matter wheather the .then or the .catch gets executed finally if .finally() is there it will get executed and this shows that the promise is compleated.


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//is tarike se bhi by use of async function we can handle promise and it gives the same result but here the cas is you first stores the result in try block and if resolve is called it will be returned and stored to the variable in try and if the reject is called then catch will be called.
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')  //fetch is a promise in itself used to get the data 
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.*/

                                                 //.filter()
// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {  //filter kabhi koi value return nahi karta hai.
//     //console.log(item);
//     return item
// } );

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {   //filter returns a subarray of those elements that satisfy the value.
//     return num > 4                         //scope open karne ke baad return keyword use karna important hai.
// } );

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
                                              
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

                                                     //  .map()
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})  //the num target each element of the array myNumber and it also return the array of values  

const newNums = myNumers   // is tarike se methods ki chaining bhi kar sakte hain and next method pe jane se pehle initial method completely run hokar ek naya array banata hai and wahi array next ko pass kar di jati hai.
                .map((num) => num * 10 )
                .map((num) => num + 1)
                .filter((num) => num >= 40)

console.log(newNums);
                                                     //.reduce()
const myNum = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);            //accumulator ki value 0 se start hogi and 
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)  //accumulator ki value arrow function ke  baad wale element se start hokar har bar accumulator + current val ho jayegi current value hojayegi and current value is the currnt array element here

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

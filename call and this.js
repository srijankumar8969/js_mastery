function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername(username)   //fnction ke ander ek aur function hai jo ki kuvh aur property set kar raha hai //clearly this code should work
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);  //this will return the object {email:"chai@fb.com",password:"123"}
 but why is because the SetUsername function is called inside createUser function thus its execution context will be created aftre createUser thus before createUser is executed it has already got executed and its reference is deleated thus even after the value of user name is set it is not coming so we use .call() to hold the reference of the function second problem is that in that function this is its own execution context thus we need to transfer this also

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

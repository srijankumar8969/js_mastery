//One of the many features of JavaScript is its ability to define getters and setters for object properties. Getters and setters provide a way to encapsulate the implementation details of an object property, while still allowing external code to access and modify its value.

class User {
    constructor(email, password){
        this.email = email;  //_ only name ke collision ko rokt hai // we can use _email here and inside the function but cant use email both here and inside the function atleast one sjhould be different
        this.password = password
    }
  
    get email(){  //the ae of the getter or setter is directly related to the name at constructor.
        return this._email.toUpperCase()  //the _ used is neglected and it refer to the this.email this but still this is necessary because we don't want a race to get started between the constructor and the getters and setters for setting the value to the email in the setters 
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);  //from here directly the getter is called


function User(email, password){
    this.email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value;   //here we don't get kinf of race situation as we are defining a property
        }
    });
  
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value;
        }
    })
}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);




                                                                      for Object
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

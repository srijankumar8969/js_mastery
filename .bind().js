<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <button>Button Clicked</button>
</body>
<script>
    class React {
        constructor(){
            this.library = "React";
            this.server = "https://localhost:300";
            //requirement
           // document.querySelector('button').addEventListener('click', this.handleClick); here handleClick function is acting upon the click of the button so its current context is the buton so in that function we cant access anything from the current object. Thus we use bind which cant help one object to get the properties of other thus we use .bind(this) . this borrows properties of handleClick
            document.querySelector('button').addEventListener('click', this.handleClick.bind(this));
        }
        handleClick(){
            console.log("button clicked");
            console.log(this.server);
        }
    }
    const app = new React();


/*other examples 1
  With the bind() method, an object can borrow a method from another object.
The member object borrows the fullname method from the person object:*/
  const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}
let fullName = person.fullName.bind(member);

/*other examples 2
When a function is used as a callback, this is lost.*/

const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}
//person.display();  //this will print undefined undefined as i the function this has lost its reference 
let display = person.display.bind(person);
setTimeout(display, 3000);

</script>
</html>

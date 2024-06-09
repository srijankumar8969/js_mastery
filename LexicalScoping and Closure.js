<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Closure aur chai</title>
</head>
<body style="background-color: #313131;">
    <button id="orange">Orange</button>
    <button id="green">Green</button>
</body>

    <script>
    // function init() {
    //     let name = "Mozilla"; 
    //     function displayName() {
    //         console.log(name); // insider function has the access of variables of the outer function but siblings cant share variables between themseleves neither the outer funtion can access the variable declared inside the inner funtion 
    //     }
    //     displayName();
    // }
    // init();

    // function outer(){
    //     let username = "hitesh"
    //     console.log("OUTER", secret);
    //     function inner(){
    //         let secret = "my123"
    //         console.log("inner", username);
    //     }
    //     function innerTwo(){
    //         console.log("innerTwo", username);
    //         console.log(secret);  //this will cause an error
    //     }
    //     inner()
    //     innerTwo()

    // }
    // outer()
    // console.log("TOO OUTER", username);


    // function makeFunc() {
    //     const name = "Mozilla";
    //     function displayName() {
    //         console.log(name);
    //     }
    //     return displayName;  //outer function on execution returns the reference of the inner function
    // }

    // const myFunc = makeFunc();  //here once the outer function gets executed it sends the reference of inner function to the variable but while executing the inner function if inner function needs something from the outer function then it should not be available to it because once the outer function is executed its reference and all the memory taken by its variables should get cleared and thus error should occur but this doesn't happen even after the execution of the outer funtion since an inner function is passed as a reference thus reference of the outer function will be available to the inner function it can access what ever from the outer functon. this property is called closure
    // myFunc();
    </script>
    <script>
        // document.getElementById("orange").onclick = function(){
        //     document.body.style.backgroundColor = `orange`
        // }
        // document.getElementById("green").onclick = function(){
        //     document.body.style.backgroundColor = `green`
        // }

        function clickHandler(color){
            return function(){  //not the function but the reference of it i passed thus in the onclick event the inner function doesn't get executed at its own 
                document.body.style.backgroundColor = `${color}`;
            }
        }
        document.getElementById('orange').onclick = clickHandler("orange");  //here we need to pass the parametere and in this case it will get executed directly
        document.getElementById('green').onclick = clickHandler("green");
    </script>
</html>

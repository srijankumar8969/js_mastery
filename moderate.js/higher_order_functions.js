// A function that accepts function as input or return function 

function val(num1,num2,cb){ // this is done so that prigran doesn't take long time to load as once the addition is done then we pass the sum into the function thus function callback after addition is done 
    var van =num1+num2;
    cb(van);
  }  

//val(1,2,add);
//function add(val){
//  console.log(val);
//}
   val(1,2,function (tar){
      console.log(tar);
        });

/*
function bam(val){
    console.log(val);
}
function ho(num1,num2,cb){
    var van =num1+num2;
    cb(van);
  }  
   
ho(2,3,bam);

  */  
//$("").addEventListener("click",function(){
//    console.log
//}


//returning a function

function val(num1,num2){
    var add= num1+num2;
    return ()=> console.log(add);
}
    var sum = val(2,3); //the function has been returned into sum thus to run the function you will have to call it
    sum();
    



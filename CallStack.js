Javascript execution context--> how js run the program
First of all a global execution context is created and it is refered to a variable this
other execution contexts
Functional execution context 
Eval execution context (in mongoose)
Javascript code gets executed in two phase that are 1. Memory creation phase 2. Execution phase
e.g. code 
let var1 = 10;
let var2 = 5;
funnction addnum(num1, num2){
let total = num1 + num2;
  return total;
}
let result1 = addnum(var1 , var2);
let result2 = addnum(10 , 2);

1.global execution-> this
Memory phase : var1 is given memeory location and alloted a value undefined, similarly for var2 ,addnum is provided function defination, then simmilar allocation as var1 occurs to result1 and result
Execution phase: var1=10,var2=5,result1=a new execution context is declared ( and new variable envir)

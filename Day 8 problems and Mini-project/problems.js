// Problem 1
try{
    console.log(x);

}catch(err){
    console.log("Variable is not Defined:",err)
}finally{
    console.log("Problem 1 Ends!!!")
}

// problem 2
let age=Number(prompt("Enter you Age: "));
if(age<=18){
    throw new Error("You must be 18+ to proceed.")
}else{
    console.log("Access Granted")
}

// problem 3
// Try calling both before they are declared
greet();     // Should work
greetExp();  // Should throw error

function greet() {
  console.log("Hello from function declaration!");
}

var greetExp = function() {
  console.log("Hello from function expression!");
};

// problem 4
"use strict";
try {
    x = 50; // Error: x is not declared
    console.log(x);
} catch (err) {
    console.log("Strict Mode Error:", err.message);
}

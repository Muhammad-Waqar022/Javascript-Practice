'use strict';
//  1. Function Declaration – Easy Problems

// problem 1
function sayHi(){
    return "Hi, Waqar! Welcome to Javascript."
}
console.log(sayHi());

// problem  2
function doubleNumber(a){
 return a*a;
}
console.log(doubleNumber(5));

// 2. Function Expression – Slightly Tricky

// problem1
let sayGoodNight= function(){
    return "Good night, Waqar!";
}
console.log(sayGoodNight());

// problem 2

let isEven=function(a){
    if(a%2 === 0){
        console.log("Even")
    }
    else{
        console.log("Odd");
    }
}
isEven(2);
isEven(3);

// 3. Arrow Function – Modern Style

// problem 1
let square=a=>a*a;
console.log(square(4));

// problem 2
let getGreeting=()=>"Good Morning, Waqar!";
console.log(getGreeting())

// 4. Default Parameters – Helpful Defaults
let greetUser=(name="Guest")=>"hello, "+name;
console.log(greetUser("Waqar"));
console.log(greetUser());

//  5. Return Values – Get Output Back

// problem 1
let multiply=(a,b)=>a*b;
console.log(multiply(5,4));

//problem 2
let getFullName=(firstName, LastName)=>firstName +" "+LastName;
console.log(getFullName("Muhammad","Waqar"));

// 6. Callback Functions – Function Inside Function
function welcomeUser(name, callBack){
    return "Welcome,"+ name+ " "+callBack();
}
function enjoy(){
    return"Hope you enjoy your stay."
}
console.log(welcomeUser("Waqar!",enjoy));

// 7. Pure vs Impure Functions – Understand the Difference

// problem 1
function addTax(price){
    let tax= price * 0.10;
    return price+tax;
}
console.log(addTax(500));

// problem 2
var score=0;
function updateScore(){
    score+=10;
    return score;
}
console.log(updateScore());
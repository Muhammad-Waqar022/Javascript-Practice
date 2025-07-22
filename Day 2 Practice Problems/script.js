'use strict';

// Problem 1: Voting Eligibility Checker
let age= 18;
let isEligible= age>=18?"You are Eligible to vote":"You are not Eligible to vote";
console.log(`As your age is ${age}. So,${isEligible}`);

// Problem 2: Simple Calculator (using switch)
let num1=Number(prompt("Enter First Number: "));
let num2=Number(prompt("Enter second Number: "));
let operator=prompt("Enter the operator(+,-,*,/): ");

switch(operator){
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        console.log(num1/num2);
        break;
    default:
        console.log("Invalid Operation");
        break;
}

// Problem 3: Scope Demo
let greeting="Hello";
function showScope(){
    let name="Waqar";
    return greeting + name;
}
console.log(name);

// Problem 4: The 'this' Keyword
const car = {
    brand: "Toyota",
    showBrand: function() {
        console.log("The car brand is " + this.brand);
    }
};
car.showBrand();
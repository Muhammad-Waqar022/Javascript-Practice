let expenses = [1200, 400, 2200, 800]; // All amounts in PKR
expenses.push(1500); // You bought a new gadget
console.log("Expenses:",expenses)
let bigExpenses = expenses.filter(amount => amount > 1000);
console.log("Big expenses:", bigExpenses);
let total = expenses.reduce((acc, curr) => acc + curr, 0);
console.log("Total spent:", total);
let [first, second, ...others] = expenses;
console.log("First:", first, "Second:", second, "Others:", others);
let withTax = expenses.map(amount => amount + (amount * 0.1));
console.log("With tax:", withTax);
let userName = "Waqar";
console.log(`Hi ${userName}, your total spending is PKR ${total}.`);

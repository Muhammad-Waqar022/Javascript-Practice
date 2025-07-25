📘 Day 8 – Error Handling & Hoisting
📚 Topics Covered
Today, I learned and practiced the following JavaScript concepts:

🔹 Error Handling
try...catch...finally: Used to catch and handle errors without crashing the program.

throw: Used to create custom errors based on certain conditions.

🔹 JavaScript Hoisting
Variable Hoisting: var declarations are hoisted to the top of their scope.

Function Hoisting: Function declarations are hoisted completely.

let and const are not hoisted in the same way and cause a ReferenceError if accessed before declaration.

🔹 use strict
Enabling strict mode helps write secure and cleaner JavaScript.

It prevents the use of undeclared variables and catches silent errors.

🧠 Practice Problems Solved
I wrote simple programs for the following:

Catching an undefined variable using try...catch

Throwing a custom error when an invalid input is given

Testing function hoisting

Testing variable hoisting with var, let, and const

Using use strict mode and observing its effects

💻 Mini Project – Simple User Registration (with Error Handling)
👇 What It Does:
Prompts the user to enter:

Username

Email

Phone number

Password

Validates all fields using RegEx

Throws custom errors if something is invalid

Shows a random user ID and registration time

Always ends with a thank-you message

🔐 Bonus:
Includes use strict mode

Uses try...catch...finally to manage input and validation
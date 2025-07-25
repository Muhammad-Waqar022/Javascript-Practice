// Problem 1 – Show Today’s Full Date
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let today = new Date();
let dayName = days[today.getDay()];
console.log(dayName);
// console.log(date)

// Problem 2
let todaysDate = new Date();
let currentYear = todaysDate.getFullYear();
let userYear = Number(prompt("Enter your birth year: "));
let userAge = currentYear - userYear;
console.log(`Your age is ${userAge} years Old`);

// Problem 3: Generate a random 4-digit OTP.
let otp = Math.floor(1000 + Math.random() * 9000);
console.log(`Your OTP is: ${otp}`);

// Problem 4: Ask the user to enter an email and check if it's valid using RegEx.
let email = prompt("Enter your email:");
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailPattern.test(email)) {
  console.log("Valid Email ✅");
} else {
  console.log("Invalid Email ❌");
}

// Problem 5: Ask the user to enter a password and check if it contains at least one capital letter, one number, and is at least 8 characters long.
let password = prompt("Enter your password:");
let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

if (passwordPattern.test(password)) {
  console.log("Strong Password 💪");
} else {
  console.log("Weak Password ❌");
}

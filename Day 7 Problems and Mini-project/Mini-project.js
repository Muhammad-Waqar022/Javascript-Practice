let patternUsername = /^[a-zA-Z0-9_]{4,12}$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phonePattern = /^03[0-9]{9}$/;
let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

let userName = prompt("Enter your name: ");
let email = prompt("Enter your email: ");
let phoneNo = prompt("Enter your Phone Number: ");
let password = prompt("Enter your Password: ");

let validUser = patternUsername.test(userName);
let validEmail = emailPattern.test(email);
let validPhoneNo = phonePattern.test(phoneNo);
let validPassword = passwordPattern.test(password);

if (validUser) {
    console.log("Username is Valid.");
} else {
    console.log("Username is not Valid.");
}

if (validEmail) {
    console.log("Email is Valid.");
} else {
    console.log("Email is not Valid.");
}

if (validPhoneNo) {
    console.log("Phone Number is Valid.");
} else {
    console.log("Phone Number is not Valid.");
}

if (validPassword) {
    console.log("Password is Valid.");
} else {
    console.log("Password is not Valid.");
}

if (validUser && validEmail && validPhoneNo && validPassword) {
    let randomId = Math.floor(Math.random() * 10 + 1000);
    let registrationTime = new Date().toLocaleString();
    console.log(`Your ID is "${randomId}"`);
    console.log(`Registration successful at: ${registrationTime}`);
}

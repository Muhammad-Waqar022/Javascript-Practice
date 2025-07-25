console.log("===== Welcome to Smart Student Registration! =====");

'use strict';

try {
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

    if (validUser && validEmail && validPhoneNo && validPassword) {
        let randomId = Math.floor(Math.random() * 10 + 1000);
        let time = new Date().toLocaleString();
        console.log(`🎉 Registration Successful!`);
        console.log(`Your ID is "${randomId}"`);
        console.log(`Registered on: ${time}`);
    } else {
        console.log("❌ Registration failed. Please check your input details.");
        throw new Error("Invalid registration input.");
    }

    // Attendance Block
    let students = [];
    let isContinue = prompt("Would you like to mark attendance? Y/N: ");

    if (isContinue && isContinue.toUpperCase() === 'Y') {
        let present = Number(prompt("How many students are present?: "));
        for (let i = 1; i <= present; i++) {
            let name = prompt(`Enter the name of student ${i}: `);
            students.push(name.trim());
        }

        for (let student of students) {
            console.log(`✅ ${student}, you're marked present.`);
        }

        console.log(`📋 Attendance completed. Total students present: ${students.length}`);
    } else {
        console.log("👍 Thank you for Registering!");
    }
} catch (error) {
    console.log(`⚠️ Error: ${error.message}`);
} finally {
    console.log("📌 Program Ended. Have a great day!");
}

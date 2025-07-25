"use strict";


function checkInput(field, value, pattern) {
  if (!value) {
    throw `${field} is required.`;
  }
  if (!pattern.test(value)) {
    throw `${field} is not valid.`;
  }
}

function makeUserId() {
  return Math.floor(Math.random() * 9000 + 1000);
}

// Main registration function
function register() {
  let username = prompt("Enter your username (4-12 characters):");
  let email = prompt("Enter your email:");
  let phone = prompt("Enter your phone number (03xxxxxxxxx):");
  let password = prompt("Enter your password (min 8 chars, 1 capital, 1 number):");

  let usernamePattern = /^[a-zA-Z0-9_]{4,12}$/;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phonePattern = /^03[0-9]{9}$/;
  let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  try {
    checkInput("Username", username, usernamePattern);
    checkInput("Email", email, emailPattern);
    checkInput("Phone Number", phone, phonePattern);
    checkInput("Password", password, passwordPattern);

    let userId = makeUserId();
    let time = new Date().toLocaleString();

    console.log("✅ You are registered successfully!");
    console.log(`🆔 Your ID: ${userId}`);
    console.log(`🕒 Registered at: ${time}`);
  } catch (error) {
    console.log("❌ Error:", error);
  } finally {
    console.log("🙏 Thank you for registering.");
  }
}

register();
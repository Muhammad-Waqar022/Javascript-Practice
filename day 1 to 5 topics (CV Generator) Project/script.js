"use strict";

const fullName = prompt("Enter Full Name: ");
let age = Number(prompt("Enter Age: "));
let email = prompt("Enter Email: ");
let phone = prompt("Enter Phone: ");
let city = prompt("Enter City: ");
let experience = prompt("Enter Experience: ");

const Education = {
  School: prompt("Enter School Name: "),
  College: prompt("Enter College Name: "),
  University: prompt("Enter University Name: "),
};

const skillInput = prompt("Enter your skills (separated by commas):");
const skills = skillInput.split(",").map((skill) => skill.trim());

function CV(name, age, email, phone, city, experience, Education, skills) {
  let cv = "---------- CV ----------\n";
  cv += `Full Name   : ${name}\n`;
  cv += `Age         : ${age}\n`;
  cv += `Email       : ${email}\n`;
  cv += `Phone       : ${phone}\n`;
  cv += `City        : ${city}\n`;
  cv += `Experience  : ${experience}\n`;
  cv += "Education:\n";
  cv += `  - School    : ${Education.School}\n`;
  cv += `  - College   : ${Education.College}\n`;
  cv += `  - University: ${Education.University}\n`;
  cv += "Skills:\n";
  skills.forEach((skill, index) => {
    cv += `  ${index + 1}. ${skill}\n`;
  });
  cv += "------------------------";
  return cv;
}

function greetUser(name) {
  return `Welcome, ${name}! Here's your generated CV:\n`;
}

function checkAge(age) {
  if (age < 18) {
    return "You are a student.";
  } else if (age <= 30) {
    return "You are a young professional.";
  } else {
    return "You are an experienced professional.";
  }
}

console.log(greetUser(fullName));
console.log(
  CV(fullName, age, email, phone, city, experience, Education, skills)
);
console.log(checkAge(age));

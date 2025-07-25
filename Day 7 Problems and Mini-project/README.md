# 📅 Day 7 – Date, Math & Regular Expressions

## ✅ Topics Covered

Today, I learned and practiced the following JavaScript topics:

### 🕓 Date Object
- Creating and using `new Date()`
- Methods like:
  - `getDate()`
  - `getFullYear()`
  - `getMonth()`
  - `getHours()`
  - `toLocaleString()`

### 🧮 Math Object
- `Math.random()`
- `Math.floor()`
- `Math.ceil()`
- `Math.round()`
- `Math.max()` / `Math.min()`

### 🔍 Regular Expressions (RegEx)
- RegEx syntax and flags (`g`, `i`, `m`)
- Validating:
  - Usernames
  - Emails
  - Phone numbers
  - Passwords
- Common patterns for form validation

---

## 🧪 Problems Solved

I implemented various practice problems using the above topics, such as:

- Calculating user's age from the birth year using the Date object
- Generating random numbers with `Math.random()`
- Rounding numbers using `Math.floor()`, `Math.ceil()`, `Math.round()`
- Validating user input using RegEx patterns
- Understanding how each built-in object helps solve real-world problems

---

## 💡 Mini-Project: User Registration System

I built a **User Registration System** that validates the user's information using RegEx and generates a unique user ID and registration timestamp.

### ✔️ Features:
- Validates:
  - Username (4–12 chars, letters, numbers, underscores)
  - Email format
  - Pakistani phone number (starts with `03`, 11 digits)
  - Password (at least 8 chars, 1 capital letter, 1 number)
- On successful registration:
  - Generates a random ID
  - Logs the registration date & time using the Date object

---

📘 Smart Student Registration & Attendance System
This is a simple beginner-level JavaScript console-based project that handles user registration with validation and student attendance marking. It also includes error handling using try...catch...finally.

🧠 Features Covered
✅ User Input Validation using Regex
✅ Unique User ID Generation
✅ Registration Timestamp using Date object
✅ Storing Student Names in an Array
✅ Looping with for, for...of
✅ Error Handling with try...catch...finally
✅ use strict mode
✅ Beginner-friendly console output

🧩 Technologies Used
-Vanilla JavaScript (ES6+)

-Console Input via prompt()

-Regex for pattern matching

-Error handling

📂 Project Structure

Day-8/
├── smart-student-registration.js
├── README.md


🛠️ How It Works
User is asked to enter:

Name (4–12 chars, alphanumeric/underscore)

Valid Email

Pakistani Phone Number (starting with 03)

Password (8+ chars, 1 uppercase letter and 1 number)

If all inputs are valid:

A Random User ID is generated.

Registration time is displayed.

Then, user can:

Mark student attendance by entering number of present students and their names.

Names are stored in an array and displayed one by one.

If anything goes wrong (like invalid input), an error is caught and displayed using catch.

The program ends with a final message using finally.

📸 Sample Output

===== Welcome to Smart Student Registration! =====
Enter your name: waqar_dev
Enter your email: waqar@example.com
Enter your phone number: 03001234567
Enter your password: Hello1234
🎉 Registration Successful!
Your ID is "1009"
Registered on: 7/23/2025, 1:43:21 PM
Would you like to mark attendance? Y/N: Y
How many students are present?: 2
Enter the name of student 1: Ali
Enter the name of student 2: Sara
✅ Ali, you're marked present.
✅ Sara, you're marked present.
📋 Attendance completed. Total students present: 2
📌 Program Ended. Have a great day!

📚 Concepts Practiced
-Regular Expressions (Regex)

-Loops (for, for...of)

-Arrays and push()

-Date and Time

-String and Number input handling

-try...catch...finally block

-use strict to enforce cleaner JavaScript
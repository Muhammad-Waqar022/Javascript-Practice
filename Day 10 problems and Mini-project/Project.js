// Base class
class Student {
  constructor(name, rollNumber, course) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.course = course;
  }

  getDetails() {
    return `${this.rollNumber}: ${this.name} - ${this.course}`;
  }
}

class PremiumStudent extends Student {
  constructor(name, rollNumber, course, accessLevel) {
    super(name, rollNumber, course);
    this.accessLevel = accessLevel;
  }

  getDetails() {
    return `${super.getDetails()} (Premium: ${this.accessLevel})`;
  }
}

const studentMap = new Map();
const courseSet = new Set();

function addStudent(student) {
  studentMap.set(student.rollNumber, student);
  courseSet.add(student.course);
  console.log(`Added student: ${student.name}, Roll No: ${student.rollNumber}`);
}

addStudent(new Student("Waqar", 101, "Web Development"));
addStudent(new PremiumStudent("Haseeb", 102, "Data Science", "Gold"));
addStudent(new Student("Arslan", 103, "Web Development"));

console.log("\nAll Students:");
for (let student of studentMap.values()) {
  console.log(student.getDetails());
}

console.log("\nUnique Courses:");
console.log([...courseSet].join(", "));

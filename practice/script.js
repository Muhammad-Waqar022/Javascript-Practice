 const arr=[1,,2,4,5,5];

const sum4=arr.reduce((total,curr)=>{
  total += curr;
  return total
},10)
console.log(sum4)

const users22=[
  {firstName:"Waqar",lastName:"Ajmal",age:20},
  {firstName:"Arslan",lastName:"Ayub",age:22},
  {firstName:"Sara",lastName:"Babar",age:29},
  {firstName:"bilal",lastName:"Ajmal",age:17},
]

const output22 = users22.reduce(function(acc, curr){
    if(curr.age < 25){
        acc.push(curr.firstName);
    }
    return acc;
}, [ ]);

console.log(output22);

// problem 1
console.log("-----########-----");
const students = [
  {
    name: "Waqar",
    age: 20,
    scores: { math: 90, english: 85, science: 92 },
  },
  {
    name: "Areeb",
    age: 21,
    scores: { math: 78, english: 82, science: 79 },
  },
  {
    name: "Zara",
    age: 19,
    scores: { math: 95, english: 91, science: 89 },
  },
  {
    name: "Ali",
    age: 22,
    scores: { math: 60, english: 58, science: 64 },
  },
];
let count = 0;
const output = students
  .filter((x) => {
    let total = x.scores.math + x.scores.english + x.scores.science;
    return total > 200;
  })
  .map((x) => {
    let name = x.name;
    let totalScores = x.scores.math + x.scores.english + x.scores.science;
    count++;
    return { name, totalScores };
  })
  .reduce((total, curr) => {
    return total + curr.totalScores;
  }, 0);

let average = Math.floor(output / count);
console.log(`The average marks of per student is ${average}`);

// Problem 2
console.log("-----########-----");
const users = [
  { id: 1, name: "Waqar", email: "waqar@gmail.com", active: true },
  { id: 2, name: "Ali", email: "ali@gmail.com", active: false },
  { id: 3, name: "Zara", email: "zara@gmail.com", active: true },
];

let output2 = users
  .filter((x) => {
    let isactive = x.active;
    return isactive ? isactive : 0;
  })
  .map((x) => {
    let emails = x.email;
    return emails;
  });
console.log(output2);

// problem 3
console.log("-----########-----");
const students2 = [
  {
    name: "Waqar",
    scores: { math: 85, english: 78, science: 90 },
  },
  {
    name: "Ali",
    scores: { math: 75, english: 60, science: 50 },
  },
  {
    name: "Arslan",
    scores: { math: 85, english: 68, science: 70 },
  },
  {
    name: "Ahmad",
    scores: { math: 45, english: 50, science: 90 },
  },
];
let output3 = students2.map((x) => {
  let name = x.name;
  let totalSc = x.scores.math + x.scores.english + x.scores.science;
  let avg = Math.floor(totalSc / 3);
  let status = avg >= 65 ? "pass" : "fail";
  return { name, avg, status };
});
console.log(output3);

// Problem 4
console.log("-----########-----");
const students3 = [
  {
    id: 1,
    name: "Waqar",
    scores: {
      math: 92,
      english: 87,
      science: 88,
      computer: 95,
    },
  },
  {
    id: 2,
    name: "Ali",
    scores: {
      math: 66,
      english: 54,
      science: 73,
      computer: 58,
    },
  },
  {
    id: 3,
    name: "Zara",
    scores: {
      math: 35,
      english: 39,
      science: 40,
      computer: 41,
    },
  },
  {
    id: 4,
    name: "Arslan",
    scores: {
      math: 85,
      english: 91,
      science: 93,
      computer: 89,
    },
  },
];

let result = students3.map((x) => {
  let name = x.name;
  let totalMarks =
    x.scores.math + x.scores.english + x.scores.science + x.scores.computer;
  let percentage = Math.floor((totalMarks / 400) * 100);
  let status = totalMarks > 160 ? "pass" : "fail";
  let grade;
  if (percentage >= 90 && percentage <= 100) {
    grade = "A+";
  } else if (percentage >= 80 && percentage < 90) {
    grade = "A";
  } else if (percentage >= 70 && percentage < 80) {
    grade = "B";
  } else if (percentage >= 60 && percentage < 70) {
    grade = "C";
  } else if (percentage >= 50 && percentage < 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  return { name, totalMarks,percentage:`${percentage}%`, status, grade };
})

let gradeCount = result.reduce((acc, curr) => {
  acc[curr.grade] = (acc[curr.grade] || 0) + 1;
  return acc;
}, {});
console.log(result);
console.log("Grade Count:", gradeCount);

// Problem 5
console.log("-----#####-----")
const numbers = [10, 20, 30, 40];

let sum=numbers.reduce((acc,curr)=>acc +=curr,0)
console.log(sum)

// Problem 6
console.log("-----#####-----")
const nums = [45, 76, 23, 89, 12];

let max=nums.reduce((acc,curr)=>{
    if(curr>acc){
      acc=curr;
    }
    return acc
},0)
console.log(max)

// problem 3
console.log("-----#####-----")
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let count2=fruits.reduce((acc,curr)=>{
   if (acc[curr]) {
    acc[curr] += 1; // fruit already exists, increase count
  } else {
    acc[curr] = 1; // first time we see this fruit
  }
  return acc;
},{})
console.log(count2)

// problem 4
console.log("-----#####-----")
const students4= [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 90 },
  { name: "Ahmed", marks: 78 },
];

let totalMarks=students4.reduce((acc,curr)=>{
  let marks=curr.marks
  acc += marks;
  return acc
},0)

console.log(totalMarks)

/// problem 4
console.log("-----#####-----")
const students5= [
  { name: "Ali", grade: "A" },
  { name: "Sara", grade: "B" },
  { name: "Ahmed", grade: "A" },
  { name: "Hina", grade: "C" },
];

let group=students5.reduce((acc,curr)=>{
  if (!acc[curr.grade]) {
    acc[curr.grade] = [];
  }
 acc[curr.grade].push(curr.name);
  
  return acc;

},{})
console.log(group)
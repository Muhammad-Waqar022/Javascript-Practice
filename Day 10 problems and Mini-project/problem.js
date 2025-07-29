// Problem 1 Create a Student class

class Student{
    constructor(name,rollNumber){
        this.name=name;
        this.rollNumber=rollNumber;
    }
    introduce(){
        console.log(`Hi, I'm ${this.name}, and my roll number is ${this.rollNumber}.`)
    }
}
let student1= new Student("Waqar",974);
student1.introduce(); 

// problem 2 Add a method to calculate area

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    area(){
       return this.width*this.height;
    }
}
let area1 = new Rectangle(5,4)
console.log(area1.area());

// Problem 3 Animal → Cat

class Animal {
    constructor(name){
this.name=name;
    }
    makeSound(){
        console.log("Meow!!");
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log(`Meow from ${this.name}`)
    }
}
let cat1= new Cat("Sheruuuu")
cat1.meow()

// Problem 4 Map of Students

let student= new Map();

student.set("Waqar",3.5);
student.set("Haseeb",3);
student.set("Arslan",2.5);

for (let [name, grade] of student) {
  console.log(`${name}: ${grade}`);
}

console.log(student.get("Waqar"));

// Problem 5 Unique Elements

function uniqueArray(arr){
    let newArr=[... new Set(arr)];
    return newArr;
}
console.log(uniqueArray([1,2,4,4,4,3,5,6,6,6,9,7,9]))
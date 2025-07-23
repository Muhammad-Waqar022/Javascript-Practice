// Problem 1: Create & Access Object
const Book = {
  title: "JavaScript Basics",
  author: "Waqar",
  pages: 120,
};
console.log(Book.title);
console.log(Book.author);
console.log(Book.pages);

// Problem 2: Object with Method
const Calculator = {
  num1: 10,
  num2: 2,

  add() {
    return this.num1 + this.num2;
  },
  multiply() {
    return this.num1 * this.num2;
  },
};

console.log(Calculator.add());
console.log(Calculator.multiply());

// Problem 3: Object Constructor
function Person(name,age){
    this.name=name;
    this.age=age;
    this.introduce=()=>`Hi, I'm ${this.name} and I'm ${age} years old.`
    
}
let  person1=new Person("Waqar", 19);
console.log(person1.introduce())
let  person2=new Person("Arslan", 21);
console.log(person2.introduce());

// Problem 4: Destructuring & Rest
const user = {
  name: "Waqar",
  age: 19,
  email: "waqar@example.com",
  city: "Lahore"
};
let {name,age,...otherDetails}=user;
console.log(name,age,otherDetails);

//  Problem 5: Spread Operator
const user1 = { name: "Waqar", age: 19 };
const info = { country: "Pakistan", profession: "Developer" };

const fullUser={...user1,...info};
console.log(fullUser);

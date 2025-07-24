// Probelm 1
for(let i=1;i<=10;i++){
    console.log(i);
}

// Problem 2
let i=1
while(i<=20){
    if(i%2 === 0){
        console.log(i);
    }
    i++;
}

// Problem 3
let j=10;
do{
    console.log(j);
    j--; 
}
while(j>=1);

// For of and for in 
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(fruit)
}

const student = {
  name: "Waqar",
  age: 19,
  city: "Lahore"
};
for(let key in student){
    console.log(key,student[key])
}

// Problem 6
for(let k=1;k<=10;k++){
    if(k=== 6){
        break;
    }
    console.log(k);

}

// problem 7
for(let k=1;k<=10;k++){
    if(k=== 5){
        continue;
    }
    console.log(k);
}

// Bonus Problem
let myName="Waqar";
for (const char of myName) {
    console.log(char)
}
// Problem 1: Favorite Colors
let favoriteColors=["Red","Blue","Green","White"];
favoriteColors.push("Yellow");
favoriteColors.shift();
console.log(favoriteColors);

//  Problem 2: Double the Numbers
let numbers=[1,2,3,4,8,9];
let doubled=numbers.map(numbers=>numbers*numbers);
console.log(doubled);

// Problem 3: Keep Only Even Numbers
let nums=[1,2,3,4,7,9,8,5];
let even=nums.filter(nums=>nums%2 === 0)
console.log(even)

//  Problem 4: Add All the Prices
let price=[10,20,30];
let sum=price.reduce((acc,curr)=>acc+curr,0)
console.log(sum)

// Problem 5: Destructuring Practice
let students=["Ali","Waqar","Arslan","Hamza","Ahmad"];
let [firstStudent,secondStudent,...restStudent]=students;
console.log(firstStudent,secondStudent,restStudent);
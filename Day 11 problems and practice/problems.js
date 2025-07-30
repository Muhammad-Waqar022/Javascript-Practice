// Problem 1

function message(){
    setTimeout(()=>{
        console.log("Hello, Waqar!")
    },3000)
}
message();

// Problem 2
let intervalID = setInterval(() => {
    console.log("tick...")
},1000); 

setTimeout(() => {
  clearInterval(intervalID);
  console.log("Interval stopped");
}, 5000);

// problem 3

function sayHi(name,callback){
    console.log("Hi, ",name)
    callback();
};
sayHi("Waqar", () => {
  console.log("Callback executed!");
});


// problem 4
function checkEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Number is Even!!!");
    } else {
      reject("Number is Odd!!!");
    }
  });
}

checkEven(4)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

// Problem 5
let steps = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First step");
  }, 2000); // 2 seconds
});

steps
  .then((msg) => {
    console.log(msg); // "First step"
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second step");
      }, 1000); // 1 second
    });
  })
  .then((msg2) => console.log(msg2))
  .catch((err) => console.log(err));

//   problem 5
async function dataMessage() {
  await new Promise(resolve => setTimeout(resolve, 7000));
  console.log("Data Loaded!");
}

dataMessage();

//  Problem 6 – Fetch Post Title from Real API

async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await response.json();
    console.log("Post title:", post.title);
  } catch (error) {
    console.log("Error fetching post:", error.message);
  }
}
getPost();

//Problem 1: Fetch User Data from API

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  console.log("User Name:", data.name);
}

getUser();

// Problem 2: Convert Object to JSON and Back
const user = { name: "Waqar", age: 19 };

const json = JSON.stringify(user);  // to string
console.log("JSON String:", json);

const backToObject = JSON.parse(json);  // back to object
console.log("User Name:", backToObject.name);


//  Problem 3: Visualize Call Stack Execution

function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("I’m the third function");
}

first();  // Starts the call stack

// Problem 5: Show Debounce in Action (e.g. Typing in Input)

function debounce(func, delay) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, delay);
    };
  }

  const search = () => {
    console.log("Searching...");
  };

  const debouncedSearch = debounce(search, 1000);

//   Problem 5: Show Throttle in Action (e.g. on scroll)
  function throttle(func, limit) {
    let waiting = false;
    return function () {
      if (!waiting) {
        func();
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  }

  const onScroll = () => {
    console.log("Scrolled!");
  };
  window.addEventListener("scroll", throttle(onScroll, 1000));


// problem 1

const changeBtn = document.getElementById("change-text");
const heading = document.getElementById("main-heading");

changeBtn.addEventListener("click", () => {
  heading.innerHTML = "Hello, Waqar!";
});

// Problem 2

const colorBtn = document.getElementById("color-button");
const colorText = document.getElementById("color-box");

colorBtn.addEventListener("click", () => {
  colorText.style.color = "red";
});

// Problem 3

const container = document.getElementById("container");
const paraBtn = document.getElementById("add-paragraph");

paraBtn.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "Hello, I am a new paragraph!";
  container.appendChild(newPara);
});

// Problem 4
const byeText = document.getElementById("bye");
const removeBtn = document.getElementById("remove");

removeBtn.addEventListener("click", () => {
  byeText.remove();
});

// Problem 5
const link = document.getElementById("my-link");

link.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Link Blocked!");
});

// Problem 6
const button = document.getElementById("inner");
const outerDiv = document.getElementById("outer");

button.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Button Clicked!");
});

outerDiv.addEventListener("click", () => {
  alert("Div Clicked!");
});

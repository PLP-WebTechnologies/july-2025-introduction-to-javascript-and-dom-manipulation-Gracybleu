// ===============================
// Part 1: Variables & Conditionals
// ===============================

const ageForm = document.getElementById("age-form");
const ageInput = document.getElementById("age-input");
const eligibilityResult = document.getElementById("eligibility-result");

ageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Variable declaration
  const age = parseInt(ageInput.value);

  // Conditional logic
  if (isNaN(age) || age < 0) {
    eligibilityResult.textContent = "Please enter a valid age.";
    eligibilityResult.style.color = "red";
  } else if (age >= 18) {
    eligibilityResult.textContent = "You are eligible to vote.";
    eligibilityResult.style.color = "green";
  } else {
    eligibilityResult.textContent = "You are not eligible to vote yet.";
    eligibilityResult.style.color = "orange";
  }
});

// ===============================
// Part 2: Custom Functions
// ===============================

// Function 1: Check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// Function 2: Capitalize a word
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// ===============================
// Part 3: Loops
// ===============================

// Loop 1: Display even numbers from 1 to 20
const evenList = document.getElementById("even-numbers");
for (let i = 1; i <= 20; i++) {
  if (isEven(i)) {
    const item = document.createElement("li");
    item.textContent = i;
    evenList.appendChild(item);
  }
}

// Loop 2: Display a list of fruits
const fruits = ["apple", "banana", "cherry", "mango"];
const fruitList = document.getElementById("fruit-list");

fruits.forEach(fruit => {
  const item = document.createElement("li");
  item.textContent = capitalize(fruit);
  fruitList.appendChild(item);
});

// ===============================
// Part 4: DOM Interactions
// ===============================

const colorButton = document.getElementById("color-button");
const dateDisplay = document.getElementById("date-display");

// DOM Interaction 1: Change background color
colorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
  // DOM Interaction 2: Display current date and time
  dateDisplay.textContent = `Current Date & Time: ${new Date().toLocaleString()}`;
});

// DOM Interaction 3: Update heading text
const mainHeading = document.querySelector("h1");
mainHeading.textContent = "JavaScript Assignment in Action!";
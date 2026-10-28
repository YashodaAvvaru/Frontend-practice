"use strict";

/* =====================================
   PROGRAM 2: SORT FRUITS IN DESCENDING
   ORDER
   ===================================== */

// Create an array of fruit names.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Display the original array.
document.getElementById("fruits").textContent =
  "Original Fruits: " + fruits.join(", ");

function sortFruits() {
  // Sort the array in descending alphabetical order.
  fruits.sort().reverse();

  // Display the sorted array.
  document.getElementById("fruits").textContent =
    "Descending Order: " + fruits.join(", ");
}

/* =====================================
   PROGRAM 3: FOR/IN LOOP
   ===================================== */

function displayLoop() {
  // Create an object.
  let student = {
    name: "Ravi",
    age: 21,
    course: "JavaScript",
  };

  let output = "";

  // The for/in loop accesses object property names.
  for (let key in student) {
    output += key + ": " + student[key] + "<br>";
  }

  // Display the result.
  document.getElementById("loopOutput").innerHTML = output;
}

/* =====================================
   PROGRAM 4: PERSON OBJECT
   TWO WAYS OF ACCESSING PROPERTIES
   ===================================== */

function displayPerson() {
  let person = {
    firstname: "mani",
    lastname: "nanidu",
  };

  // First way: Dot notation.
  let firstName = person.firstname;
  let lastName = person.lastname;

  // Second way: Bracket notation.
  let firstName2 = person["firstname"];
  let lastName2 = person["lastname"];

  document.getElementById("personOutput").innerHTML =
    "Using Dot Notation: " +
    firstName +
    " " +
    lastName +
    "<br>Using Bracket Notation: " +
    firstName2 +
    " " +
    lastName2;
}

/* =====================================
   PROGRAM 5: VARIABLE HOISTING
   ===================================== */

function displayHoisting() {
  // Access the variable before its declaration.
  let result = hoistedVariable;

  // Declare and initialize the variable afterward.
  var hoistedVariable = 100;

  document.getElementById("hoistingOutput").textContent =
    "Value before declaration: " +
    result +
    " | Value after initialization: " +
    hoistedVariable;
}

/* =====================================
   PROGRAM 6: STRICT MODE
   ===================================== */

function checkStrictMode() {
  let output = document.getElementById("strictOutput");

  try {
    // This variable has not been declared.
    undeclaredVariable = 50;

    output.textContent = "No error occurred.";
  } catch (error) {
    output.textContent = "Error: " + error.name + " - " + error.message;
  }
}

"use strict";

/* =========================================
   PROGRAM 1: EVENT LISTENER
   Display current date and time
   ========================================= */

const dateButton = document.getElementById("dateButton");

dateButton.addEventListener("click", function () {
  const currentDate = new Date();

  document.getElementById("dateOutput").textContent =
    currentDate.toLocaleString();
});

/* =========================================
   PROGRAM 2: JAVASCRIPT FORM VALIDATION
   Text box must not be empty
   ========================================= */

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const output = document.getElementById("validationOutput");

  if (username === "") {
    output.textContent = "Error: Name cannot be empty!";
    output.style.color = "red";
  } else {
    output.textContent =
      "Form submitted successfully. Welcome, " + username + "!";

    output.style.color = "green";
  }
});

/* =========================================
   PROGRAM 3: DEBUGGING USING console.log()
   ========================================= */

const debugButton = document.getElementById("debugButton");

debugButton.addEventListener("click", function () {
  console.log("Debugging program started.");

  let a = 10;
  let b = 20;

  console.log("Value of a:", a);
  console.log("Value of b:", b);

  let sum = a + b;

  console.log("Sum of a and b:", sum);

  document.getElementById("debugOutput").textContent =
    "Debugging completed. Sum = " + sum;
});

/* =========================================
   PROGRAM 4: SET, GET AND CHECK COOKIES
   ========================================= */

// Function to set a cookie.
function setCookie(name, value, days) {
  const expiryDate = new Date();

  expiryDate.setTime(expiryDate.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    ";expires=" +
    expiryDate.toUTCString() +
    ";path=/;SameSite=Lax";
}

// Function to get a cookie.
function getCookie(name) {
  const prefix = name + "=";
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();

    if (cookie.startsWith(prefix)) {
      return decodeURIComponent(cookie.substring(prefix.length));
    }
  }

  return null;
}

// Function to check whether a cookie exists.
function checkCookie(name) {
  return getCookie(name) !== null;
}

// Set Cookie button.
document
  .getElementById("setCookieButton")
  .addEventListener("click", function () {
    setCookie("username", "Ravi", 7);

    document.getElementById("cookieOutput").textContent =
      "Cookie set successfully!";
  });

// Get Cookie button.
document
  .getElementById("getCookieButton")
  .addEventListener("click", function () {
    const value = getCookie("username");

    document.getElementById("cookieOutput").textContent =
      value !== null ? "Cookie value: " + value : "Cookie not found.";
  });

// Check Cookie button.
document
  .getElementById("checkCookieButton")
  .addEventListener("click", function () {
    const exists = checkCookie("username");

    document.getElementById("cookieOutput").textContent = exists
      ? "The username cookie exists."
      : "The username cookie does not exist.";
  });

/* =========================================
   PROGRAM 5: JSON OBJECT USING DOT NOTATION
   ========================================= */

const studentJSON = {
  firstname: "Ravi",
  lastname: "Kumar",
  age: 21,
  course: "JavaScript",
  city: "Hyderabad",
};

document.getElementById("jsonButton").addEventListener("click", function () {
  const output = document.getElementById("jsonOutput");

  output.innerHTML =
    "First Name: " +
    studentJSON.firstname +
    "<br>Last Name: " +
    studentJSON.lastname +
    "<br>Age: " +
    studentJSON.age +
    "<br>Course: " +
    studentJSON.course +
    "<br>City: " +
    studentJSON.city;

  console.log("Student object:", studentJSON);
});

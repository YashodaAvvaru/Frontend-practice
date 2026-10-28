"use strict";

/* ==========================================
   PROGRAM 1: THIS KEYWORD
   The button disappears when clicked.
   ========================================== */

// Implemented directly in the HTML:
// onclick="this.style.display='none'"

/* ==========================================
   PROGRAM 2: CALL() AND APPLY()
   ========================================== */

function introduce(city, country) {
  return (
    "My name is " + this.name + ". I live in " + city + ", " + country + "."
  );
}

const person = {
  name: "Ravi",
};

function showCallApply() {
  // Using call(): arguments are passed individually.
  let callResult = introduce.call(person, "Hyderabad", "India");

  // Using apply(): arguments are passed as an array.
  let applyResult = introduce.apply(person, ["Hyderabad", "India"]);

  document.getElementById("callOutput").textContent =
    "Using call(): " + callResult;

  document.getElementById("applyOutput").textContent =
    "Using apply(): " + applyResult;
}

/* ==========================================
   PROGRAM 3: SIMPLE COUNTER
   ========================================== */

let count = 0;

function incrementCount() {
  count++;

  document.getElementById("count").textContent = count;
}

function resetCount() {
  count = 0;

  document.getElementById("count").textContent = count;
}

/* ==========================================
   PROGRAM 4: COUNTER USING GETTER AND SETTER
   ========================================== */

const counterObject = {
  _count: 0,

  // Getter: returns the current counter value.
  get count() {
    return this._count;
  },

  // Setter: updates the counter value.
  set count(value) {
    if (Number.isInteger(value) && value >= 0) {
      this._count = value;
    }
  },
};

function increaseGetterCount() {
  counterObject.count = counterObject.count + 1;

  document.getElementById("getterCount").textContent = counterObject.count;
}

function resetGetterCount() {
  counterObject.count = 0;

  document.getElementById("getterCount").textContent = counterObject.count;
}

/* ==========================================
   PROGRAM 5: ADDING PROPERTIES USING PROTOTYPES
   ========================================== */

// Create a constructor function.
function Employee(name, department) {
  this.name = name;
  this.department = department;
}

// Add a new property through the prototype.
Employee.prototype.company = "ABC Technologies";

// Add a new method through the prototype.
Employee.prototype.displayDetails = function () {
  return (
    "Name: " +
    this.name +
    "<br>Department: " +
    this.department +
    "<br>Company: " +
    this.company
  );
};

function showPrototype() {
  // Create an Employee object.
  const employee1 = new Employee("Anita", "IT");

  // Display employee details.
  document.getElementById("prototypeOutput").innerHTML =
    employee1.displayDetails();
}

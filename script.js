"use strict";

// 'this' keyword is a reference to the object that is currently executing the code. The value of this depends on the context in which it is used.

// 1. Global Context:
// When used in the global context (outside any function), this refers to the global object. In a web browser, the global object is window.
console.log(this); // window

// 2. Function Context:
// When used inside a regular function, this refers to the global object (window in a browser) if the function is called in the global scope. In strict mode, it will be undefined.
function myFunction() {
  console.log(this);
}
myFunction(); // window or undefined (in strict mode)

// 3. Method Context:
const myObject = {
  myMethod: function () {
    console.log(this);
  },
};
myObject.myMethod(); // myObject

// 4. Arrow Functions:
// Arrow functions do not have their own this context. Instead, this inside an arrow function refers to the this value of the enclosing lexical context (the regular function or global scope in which the arrow function is defined).
const myObj = {
  myMethod: function () {
    const arrowFunction = () => {
      console.log(this);
    };
    arrowFunction();
  },
};
myObj.myMethod(); // myObj

// 5. Event Listeners:
// When a function is used as an event listener, this refers to the element that received the event.
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log((this.textContent = "World")); // the button element
});

// 6. Constructor Context:
// When a function is used as a constructor (with the new keyword), this refers to the new instance created.
function MyConstructor() {
  this.value = 10;
}
const myInstance = new MyConstructor();
console.log(myInstance.value); // 10

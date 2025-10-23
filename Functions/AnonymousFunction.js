//ex:1 Anonymous Function Assigned to a Variable
const greet = function() {
  console.log("Hello, welcome!");
};

greet();  // Call the function



// ex:2  Anonymous Function with Parameters
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(5, 4));


//ex3:Anonymous Function as a Callback
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);


//explaination:
// 1️⃣ What is setTimeout?
// setTimeout is a built-in JavaScript function used to execute a function after a specified delay.

// Syntax:
// setTimeout(function, delayInMilliseconds, arg1, arg2, ...);


// function → The function to execute (can be anonymous or named).
// delayInMilliseconds → How long to wait before execution (2000ms = 2 seconds).
// arg1, arg2… → Optional arguments to pass to the function.

// 2️⃣ Breaking Down the Example
// function() {
//   console.log("Executed after 2 seconds");
// }

// This is an anonymous function (has no name).
// It contains the code to run after the delay — in this case, printing a message to the console.
// 2000
// The delay is 2000 milliseconds, i.e., 2 seconds.
// After 2 seconds, the function is executed.
// 3️⃣ How it Works
// The browser (or Node.js runtime) sets a timer for 2 seconds.
// After 2 seconds, the anonymous function is called.
// The console prints:
// Executed after 2 seconds
// 4️⃣ Key Points
// setTimeout does not block code — other code continues executing immediately.
// The function executes once after the delay.
// Can be cancelled using clearTimeout(timerID) if needed.

// ⚡ Example: Using Named Function
// function sayHello() {
//   console.log("Hello after 2 seconds");
// }
// setTimeout(sayHello, 2000);
// Works the same way, but uses a named function instead of anonymous.
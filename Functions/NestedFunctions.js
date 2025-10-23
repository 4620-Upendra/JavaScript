// 🟢 Example 1: Basic Nested Function
function outer() {
  function inner() {
    console.log("Inner function called");
  }
  inner(); // Call inner function
}

outer();


// 🟣 Example 2: Nested Function Accessing Outer Variable
function outer() {
  let x = 10;
  function inner() {
    console.log("Value of x is:", x);
  }
  inner();
}

outer();


// 🔵 Example 3: Outer Function Returning Inner Function
function outer() {
  let message = "Hello from outer";
  return function inner() {
    console.log(message);
  };
}

const innerFunc = outer(); // outer returns inner
innerFunc(); // Call the returned inner function


// 🧠 Explanation
// outer returns the inner function instead of calling it.
// innerFunc now holds the inner function and can be called later.
// Classic closure pattern — inner function retains access to outer variables even after outer has finished execution.
// 🟢 Example 1: Simple Callback Function
function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {   //higher order function:function which take function as parameter is known as higher order function
  callback("Upendra");
}
processUser(greet);   //callback function:function which take function has argument is known as callback function or functional programming function


// 🟣 Example 2: Callback with setTimeout
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);


// 🔵 Example 3: Using Array map with a Callback
const numbers = [1, 2, 3, 4];
const squares = numbers.map(function(num) {
  return num * num;
});
console.log(squares);

// 🧠 Explanation
// map takes a function as a callback and applies it to each element of the array.
// Returns a new array with the transformed values.
// Common in functional programming for transformations.
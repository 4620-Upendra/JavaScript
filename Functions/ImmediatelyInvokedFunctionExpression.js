// Example 1: Basic IIFE
(function() {
  console.log("IIFE executed!");
})();


// Example 2: IIFE with Parameters
(function(a, b) {
  console.log("Sum:", a + b);
})(5, 3);

// 🔵 Example 3: IIFE Returning a Value
let result = (function() {
  return "Returned from IIFE";
})();
console.log(result);

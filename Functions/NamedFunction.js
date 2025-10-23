function greet() {
  console.log("Hello, welcome to JavaScript!");
}

greet();  // Function call




function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(10, 20);
console.log("Sum:", result);




function showDetails(name, age) {
  console.log("Name:", name);
  console.log("Age:", age);
}

showDetails("Upendra");          // Missing one argument
showDetails("Kumar", 22, "India"); // Extra argument
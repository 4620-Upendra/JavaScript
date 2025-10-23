// 1. Named Function
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Upendra")); 

// 2. Anonymous Function
const greetAnon = function(name) {
    return `Hello, ${name}`;
};
console.log(greetAnon("Upendra")); 

// 3. Arrow Function
const greetArrow = (name) => `Hello, ${name}`;
console.log(greetArrow("Upendra")); 

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed"); 
})();

// 5. Generator Function
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generateNumbers();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

// 6. Callback Function
function greetUser(name, callback) {
    console.log(`Hello, ${name}!`); 
    callback();
}
greetUser("Upendra", () => console.log("Callback executed!")); 


// 7. Nested / Inner Function
function outer() {
    const outerVar = "Outer";
    function inner() {
        console.log(`Inner can access: ${outerVar}`);
    }
    inner();
}
outer();

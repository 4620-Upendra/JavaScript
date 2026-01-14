//1)Rest Parameter (...):
// ->Rest collects multiple values into a single array.
// ->Used inside function parameters or destructuring.

//i)example in functions: 
function sum(a,b,...numbers){ // rest parameter always at end
    console.log(a,b)
    console.log(numbers)
}
// sum(1,2,3,4,5)

//ii)Example in array destructuring
const arr=[10,20,30,40,50]
const[first,...rest]=arr 
console.log(first)
console.log(rest)


//2) Spread Operator (...)
// ->Spread expands an array or object into individual elements.
// ->Think of it like emptying the bag onto a table.

//i)Example: spreading array values
const arr1=[1,2,3,4,5]
console.log(...arr1)

//2) copy an array
const a=[1,2,3];
const b=[...a]
console.log(b)

//3)Merge arrays
let a1=[1,2,3]
let b1=[20,30,40]
let c1=[...a1,...b1]
console.log(c1)

//4)Spread in objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); 

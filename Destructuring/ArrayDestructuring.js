//destructuring: JavaScript destructuring is a syntax that lets you unpack values from arrays or properties from objects into separate variables in a clean and readable way. 
// Instead of accessing elements one-by-one, destructuring extracts them in a single statement.

//1)Array Destructuring:
//i)basic example:
let nums=[10,20,30]
let [a,b,c]=nums    //destructuring of array
console.log(a);
console.log(b);
console.log(c);


//ii)skip elements
let colors=["red","green","blue"];
let [first, ,third]=colors
console.log(first)
console.log(third)

//iii)default values
const arr=[5];
let[x=20,y=10]=arr 
console.log(x,y)      //if arr array is empty means then default of x is 20 is printed like y

//iv) nested array
let arr1=[1,2,3,[4,5,6]];
let [a1,b1,c1,[d1,e1,f1]]=arr1
console.log(a1)
console.log(d1)
console.log(e1)
console.log(f1)

//or

let arr2=[1,2,3,[4,5,6]];
let [a2,b2,c2,d2]=arr2
let[x1,y1,z1]=d2
console.log(a2)
console.log(d2)
console.log(x1,y1)

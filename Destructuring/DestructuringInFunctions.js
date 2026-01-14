//3)Destructuring in Functions

//i)Function Parameters(object)
function userName({name,city}){
    console.log(name,city)
}
userName({name:"uppi",city:"Vizag"});

//ii)Function Parameter(array)
function sum([a,b]){
    return a+b;
}
console.log(sum([2,3]));


// 4)Practical Real-World Uses of Destructuring
// ->Extracting API data
// ->React props handling
// ->Cleaner variable assignments
// ->Swapping values

// swap values quickly
let a=1,b=2;
[a,b]=[b,a]
console.log(a,b)
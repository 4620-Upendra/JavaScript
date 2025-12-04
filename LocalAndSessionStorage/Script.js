// 1)LocalStorage Example
// store value
localStorage.setItem("theme", "dark");

// get value
let mode = localStorage.getItem("theme");
console.log(mode);   // Output: dark

// remove specific key
localStorage.removeItem("theme");

// clear all data
localStorage.clear();


// 2)SessionStorage Example
// store value
sessionStorage.setItem("username", "Upendra");

// get value
let user = sessionStorage.getItem("username");
console.log(user);   // Output: Upendra

// remove specific key
sessionStorage.removeItem("username");

// clear all session data
sessionStorage.clear();

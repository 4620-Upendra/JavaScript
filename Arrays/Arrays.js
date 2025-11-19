// creating array:in two way
//i)Literal Method (most common)
let array1=[10,20,30];

//ii)Using Array constructor
let arr=new Array(10,20,30);
console.log(arr[1]);

//Array methods:
//1)push():Add item at end  
arr.push(40)

//2)pop():remove last item and pop on empty array gives:undefined
arr.pop()

//3)unshift():add item at start
arr.unshift(0);

//4) shift():remove first item and  on empty array gives:undefined
arr.shift();

//5)includes():check if exists(works like contains)(return type boolean)
console.log(arr.includes(20));

//6)indexOf():Find index of value   :index or -1
console.log(arr.indexOf(2));

//7)slice():Copy part of array (no change to original)
let a=[1,2,3,4,5];
// syntax:arrayname.slice(startIndes,endIndex) (endIndex excludes)
console.log(a.slice(1,4));
console.log(a.slice(10,13));  //slice() with invalid range:Returns empty array,Does not modify original array.

// 8) splice():Add / Remove / Replace elements (changes array)
// syntax:array.splice(startIndex, deleteCount, item1, item2, ...)
a.splice(1,2);      //delete two elements from index 1
a.splice(3,0,10,20,30);      //insert 10,20,30(3 ele) at 3
a.splice(2,2,10,20)   // replacing 2 eleemnts(3,4) from index 2 with(10,20)
a.splice(10,1)      //splice() with invalid index:If start index > length → nothing happens and No error.

//9) comncat():Combine arrays(not changes any array)
let x=[1,2];
let y=[3,4];
console.log(x.concat(y));
console.log(x.concat(y,arr))

//10)join() → Convert array to string
console.log(arr.join("-"));

//11)length:give length of array(number of elements in array)
console.log(a.length)

//You can also change length
a.length=2;
console.log(a)
console.log(a.length)


//looping methods
//12)forEach()
a.forEach(function(num){
    console.log(num);
})
//or
a.forEach((ele,index,array)=>{
    console.log("Element of index ",index,' is :',ele+" in",array)
})

// 13)map():Create new transformed array and Map on Empty Array:They return a new empty array, no error.
// syntax:array.map((element, index, array) => value);
let arr1=a.map(ele=>ele*2);
console.log(arr1)


//14)filter() → Keep only matching values  and Filter on Empty Array They return a new empty array, no error.
// syntax arraw function:array.filter((element, index, array) => condition);
let a1=a.filter(ele=>ele%2==0);
console.log(a1);

//15)reduce() → Reduce array to single value like(sum, product, average…)
// syntax:array.reduce(function(accumulator, currentValue, index, array) {
//     return updatedAccumulator;
// }, initialValue);
// Parameters:
// accumulator → stores the running result ,currentValue → current element ,initialValue → (optional but recommended) starting value

let sum=a.reduce((acc,cur)=>acc+cur,0);
console.log(sum);

//16)sort():
//i)Sorting Strings Alphabetically
// syntax:array.sort();
const fruits = ["banana", "Apple", "cherry"];
fruits.sort();
console.log(fruits)

//ii)numeric sort:
//Ascending order:
const nums = [40, 5, 200, 1];
nums.sort((a, b) => a - b);
console.log("Ascending:",nums)
// Descending order:
nums.sort((a,b)=>b-a)
console.log('Descending:',nums)




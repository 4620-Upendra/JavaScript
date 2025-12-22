// Promise: Check Number, Even or Odd
function checkEvenOrOdd(num){
    return new Promise((resolve,reject)=>{
        if(typeof num !=="number" || isNaN(num)){
            reject("Error: input is not a vaild number")
        }else if(num%2==0){
            resolve(`the number ${num} is Even`);
        }else{
             resolve(`the number ${num} is Odd`);
        }
    });
}

// valid nuumber
checkEvenOrOdd(20)
   .then((message)=>console.log(message))    //then() block runs when the promise resolves.
   .catch((error)=>console.log(error))     //catch() block runs when the promise rejects.
   .finally(()=>console.log("finally block"));      //finally() block  always either promise is resolved or rejected

// checkEvenOrOdd("abc")
//     .then((message)=>console.log(message))
//     .catch((error)=>console.log(error))
//     .finally(()=>console.log("finally block"));
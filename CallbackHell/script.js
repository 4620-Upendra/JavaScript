// Callback Hell:deeply nested callbacks make code difficult to read, debug, and maintain
// Callback Hell Example:
setTimeout(()=>{
    console.log("Task 1");

    setTimeout(()=>{
        console.log("Task 2");

        setTimeout(()=>{
            console.log("Task 3")

            setTimeout(()=>{
                console.log("task 4");
            },1000)
        },1000)
    },1000)
},1000)



//Promise Chaining: Avoided nested callbacks and improved code readability

function task(message){
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(message);
            resolve();
        },1000)
    });
}

task("task 1")
  .then(()=>{
    return task("task 2");
  })
  .then(()=>{
    return task("task 3");
  })
  .then(()=>{
    return task("task 4");
  })
  .catch((err)=>{
    console.log(err);
  })


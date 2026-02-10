//Topic:fetching in javascript
// accessing data from json server by using fetch function
//syntax:fetch(url,method)

//1)get method: in fetch used get or read data from server or backend 

//i)fetch by using try catch
function getData(){
    return fetch("http://localhost:3001/users",{
        method:"GET"
    })
}
// getData()
//      .then(msg=>msg.json())
//      .then(data=>console.log(data))
//      .catch(err=>console.log(err))


//ii) fetch by using await and async

async function getAllData1(){
    try{
        let res=await fetch("http://localHost:3001/products",{
        method:"GET"
    })
        let jsonres=await res.json()     //.json():converst json ->  js object
        console.log(jsonres);
    }catch(err){
        console.log(err)
    }
}
// getAllData1();

// getting single data from jsonserver
async function getSingleData(){
    try{
        let res=await fetch("http://localHost:3001/users/2",{
        method:"GET"
    })
        let jsonres=await res.json()
        console.log(jsonres);
    }catch(err){
        console.log(err)
    }
}
// getSingleData();




//2)post:used to data or create data in backend or store

let addData=async ()=>{
    try{
        let res= await fetch("http://localhost:3001/users",{
            method:"post",
            headers:{
                "content-type":"json/application"      //header:is used to spiecfy which type of data is adding by usingcontent-type
            },
            body:JSON.stringify({                   //JSON.stringify():is used to convert js object into json string
            "id":4,                                // if id is not added means then server generates a id automaticlly with combination of letters and numbers(b263)
            "name":"riya",                        //body :is used store data which  is adding
            "email":"riya@gmail.com",
            "password":"riya123"
            })
        })
        if(res.ok){          // after perfroming adding data then return a json i that there is ok key this (ok key) stores boolean if success(ture) otherwise false
            console.log("data added successfully")
        }else{
            console.log("data adding failed")
        }
    }catch(error){
        console.log(error)
    }
}

// addData();


//3)PUT: Update existing data (UPDATE)
//Used to update entire data of a specific item.

let updateData=()=>{
    try{
        let res=fetch("http://localhost:3001/users/1",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"upendra kumar",
                email:"upendra@gmail.com",
                password:"upendra123"
            })
        })
        if(res.ok){
            console.log("updated successfully")
        }else{
            console.log("update failed")
        }
    }catch(error){
        console.log(error)
    }
}
// updateData()



//4)DELETE: Remove data (DELETE)
//Used to delete data from the server.


let DeleteData=()=>{
    try{
        let res=fetch("http://localhost:3001/users/3",{
            method:"DELETE",                                       //for delete operation there is no need of header and bady
        })
        if(res.ok){
            console.log("deleted successfully")
        }else{
            console.log("delete failed")
        }
    }catch(error){
        console.log(error)
    }
}
DeleteData()
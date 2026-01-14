//2) Object Destructuring

//i)basic example:
let user ={name:"uppi",age:"23"};
let{name,age}=user
// console.log(name,age)

//ii)Rename variables
let persons={username:"upendra", score:85}
let{username:UserName,score:Marks}=persons
// console.log(UserName,Marks)

//iii) Default values
let item={price:100};
let{price,quantity=1}=item;
// console.log(price)
// console.log(quantity)

//iv)Nested object Destructuring
let student={
    name1:"uppi",
    address:{
        city:"Hyderabad",
        state:"TG"
    }
};

let{
    name1,
    address:{city,state}
}=student;

console.log(name1,city,state)



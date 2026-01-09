//1)object:object is a collection of key value pairs
//keys:property names , values:data or function(method)

let data={
    name:"upendra",
    age:23,
    city:"Hyderabad"
};

console.log(data);
console.log(data.name)

//2)object with methods(function inside object)
const person={
    name:"upendra",
    age:23,
    greet:function(){
        console.log("Hello,my name is "+ this.name);     //this.name refers to the name inside the same object
    }
}
person.greet();         //accessing funtion inside the object


//3)Adding, Updating, and Deleting Properties
const car={brand:"Tata"};

car.model="Nexon";       //adding key value to object
console.log(car);

car.brand="Mahindra";    //updating value of existing key in object
console.log(car);

delete car.model         // delete key value in object 
console.log(car);

//we canot delete whole object because we cannot delete variables created with:let,var,const
let obj = { a: 10 };
// delete obj;
console.log(obj);

//4)Accessing Properties of object
//in two ways     i)dot notation    ii)bracket notation

const user={name:"uppi", "age":23}

console.log(user.name);     //dot notation 
console.log(user["age"]);   //bracket notation

//5)iterating object(loop through keys)
let person1={name:"uppi", "age":23}
for(let key in person1){
    console.log(key, person1[key])
}

//6)Objects are reference types
const a={value:10};
const b=a;

b.value=20;
console.log(a.value);  //output:20(Because both refer to same memory location)
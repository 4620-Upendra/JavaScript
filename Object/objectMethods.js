//Object Methods:
// 1) Object.keys()
// 2) Object.values()
// 3) Object.entries()
// 4) Object.assign()
// 5) Object.freeze()
// 6) Object.seal()
// 7) Object.create()
// 8) Object.hasOwn()
// 9) Object.fromEntries()

const student = { name: "Uppi", age: 23, grade: "A" };

// 1)Object.keys(obj):Returns array of property names(key) in object
console.log(Object.keys(student));

// 2)Object.values(obj):Returns array of values in object
console.log(Object.values(student));

// 3)Object.entries(obj):Returns array of [key, value] pairs
console.log(Object.entries(student));

//4)Object.assign(target, source):Used for copying objects (shallow copy)
const obj1={a:1};
const obj2={b:2};

let obj3=Object.assign({},obj1,obj2);
console.log(obj3)

//5)Object.freeze(obj): when object is freezen then we cannot perfrom operation like add,delete,modify
const user={name:"raju",age:24};

Object.freeze(user);  //freezening the object
user.city="vizag"    // ignored
user.name="uppi"     // ignored
delete user.age;     // ignored
console.log(user);
console.log(Object.isFrozen(user));  //checking whether the object is frozen or not


//6)object.seal(obj): when object is sealed then we cannot perfrom operation like add,delete but we can  modify value of existing key in object
const user1={name:"raju",age:24};
Object.seal(user1)  //sealed the object
console.log(Object.isSealed(user1));

// console.log(user1)
user1.name="uppi";   //allowed
user1.city="Hyd";    // ignored
delete user1.name;  // ignored
console.log(user1)

//7)Object.create(proto):Creates object with prototype
const person={
    greet(){
        console.log("Hello");
    }
};

const user2=Object.create(person);
const user3=Object.create(user1);
user2.greet();
console.log(user3.name)

//8)Object.hasOwn(obj, key):Checks if property belongs to object itself(returns boolean)
const emp={id:20,name:"uppi"};

console.log(Object.hasOwn(emp,"id"));
console.log(Object.hasOwn(emp,"role"));

//9)Object.fromEntries():Converts array → object
const arr = [["name", "Raj"], ["age", 23]];

const obj=Object.fromEntries(arr);
console.log(obj);


//i)named modules:
//Must use the same name while importing
import {name,city,greet} from "./NamedModule.js"   
greet()
console.log(name,city);


//ii)default module:
import greetuser from "./DefaultModule.js"    //Can be imported with any name

greetuser()

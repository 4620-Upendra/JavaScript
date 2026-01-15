//JSON(JavaScript Object Notation):JSON is a lightweight data format used to store and exchange data between a client (browser) and a server.

//JavaScript Object
const user = {
    name: "Upendra",
    age: 22
};

// i)JSON.stringify():Used For Converting JavaScript objects to JSON
const jsonData = JSON.stringify(user);
console.log(jsonData);

// ii)JSON.parse():Used For Converting JSON strings to JavaScript objects using
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name);
console.log(parsedData.age);


//Example: Array of JSON (as string)
const jsonData1 = `[
  {
    "id": 1,
    "name": "Upendra",
    "course": "Java"
  },
  {
    "id": 2,
    "name": "Ravi",
    "course": "JavaScript"
  },
  {
    "id": 3,
    "name": "Anjali",
    "course": "SQL"
  }
]`;

//Convert JSON → JavaScript Array
const students = JSON.parse(jsonData);
console.log(students)
console.log(students[0].name)

//Loop through array of JSON
students.forEach(student => {
  console.log(student.name + " - " + student.course);
});



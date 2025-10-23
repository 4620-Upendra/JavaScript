function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3



function* greet() {
  yield "Hi";
  yield "Welcome";
  return "Done";
}

const g = greet();
console.log(g.next()); // {value: "Hi", done: false}
console.log(g.next()); // {value: "Welcome", done: false}
console.log(g.next()); // {value: "Done", done: true}

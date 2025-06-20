//function arguments and return
// function greet(student) {
//     console.log(`Hello ${student}!!`);
// }
// greet("Amit")

// function add(a, b){
//     return a+b;
// }
// let result = add(5, 10);
// console.log(result);

//if we don't know the exact number of argument then we can use argument object
function add() {
  console.log(arguments);
  console.log(arguments.length)
}
add(1, 2, 3, 4, 5);

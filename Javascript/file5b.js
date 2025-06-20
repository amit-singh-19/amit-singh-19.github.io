//arrow function
// function regular() {
//     console.log("This is a regular function");
// }
// regular();

// const arrow = () => {
//     console.log("This is arrow function");
// };
// arrow()

//hoisting is not applied in arrow function
// greet()
// const greet = () => {
//     console.log("Good Morning");
// }

// const add = (a, b) => {
//   return a + b;
// };
// let result = add(4, 5);
// console.log(result);

//spread operator
const add = (...args) => {
  console.log(args)
};
add(1,2,3,4,5)

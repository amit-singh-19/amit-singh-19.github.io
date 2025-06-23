//array methods

const points = [2, 3, 4, 1, 0];
// points.forEach((value) => {
//   console.log(value);
// });

// points.forEach((value, index) => {
//   console.log(`Index ${index} - Value ${value}`);
// });

// points.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// points.forEach((a, b, c) => {
//   console.log(a, b, c);
// });

// points.forEach((a, b, c) => {
//   console.log(c[b]);
// });

//map
// const newArr = points.map((value, index) => {
//   return (value += 5);
// });
// console.log(newArr);

//we can also write it in this form
// const newArr = points.map((value, index) => (value += 5));
// console.log(newArr);

//filter
// const newArr = points.filter((value) => value > 2);
// console.log(newArr);

//find
// const result = points.find((value) => value === 2);
// console.log((result));

//reduce
// const result = points.reduce((sum, value) => sum + value);
// console.log(result);

// const result = points.reduce((sum, value) => {
//   return sum + value;
// }, 0);
// console.log(result);

const newArr = points.map((value) => value > 2);
console.log(newArr);   //store boolean value in array
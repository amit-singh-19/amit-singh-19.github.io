//Command line argument - passing name from command line
// let name = process.argv[2];   //[0] -> node, [1]->index12.js, [2] -> command line argument
// console.log("Hello, " + name);

// let name1 = process.argv[2];
// let name2 = process.argv[3];
// console.log(`Hello ${name1} and ${name2}`);

// let name = process.argv[2] || 'John';
// console.log("Hello, " + name);

import express from "express";
const app = express();
let PORT = process.argv[2] || 8080;

app.get("/", (req, res) => {
  res.send("Hello from server!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

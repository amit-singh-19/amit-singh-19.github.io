import express from "express";

const app = express();

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

// app.get("/", (req, res) => {
//   res.send("Hello Amit!!");
// });

// app.get("/products", (req, res) => {
//   //   res.send("Products List");
//   res.json({ id: 1, name: "Product 1", price: 25 });
// });

// app.get("/ab*cd", (req, res) => {
//   res.send("Hello");
// });

// This is the fixed endpoint (localhost:8080/name)
// app.get("/name", (req, res) => {
//   res.send("Good Morning...");
// });

// Dynamic endpoint (localhost:8080/amit)
// app.get("/:name", (req, res) => {
//   //   res.send("Good Morning...");
//   res.send(req.params.name);
// });

// app.get("/name/:name", (req, res) => {
// //   res.send("Good Morning...");
//   res.send(req.params.name);
// });

// app.get("/:name/:age", (req, res) => {
//   res.send(req.params.name + req.params.age);
// });

// app.get("/name/:name/age/:age", (req, res) => {
//   res.send(req.params.name + req.params.age);
// });

// app.get("/", (req, res) => {
//   res.send(req.headers.authorization);
// });

//passing data in URL
//localhost:8080/?name=john&age=19
// app.get("/", (res, req) => {
//   res.send(req.query.name + req.query.age);
// });


//Get Method
app.get('/', (req, res) => {
    res.send("Get Request");
})

//Post Method
app.post('/', (req, res) => {
    res.send("Post Request");
})

//Delete Method
app.delete('/', (req, res) => {
    res.send("Delete Request");
})

//Patch Method
app.patch('/', (req, res) => {
    res.send("Path Request");
})
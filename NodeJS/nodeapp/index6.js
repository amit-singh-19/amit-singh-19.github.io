import express from "express";

const app = express();

app.listen(8080, (req, res) => {
  console.log("Server running on port 8080");
});

app.use(express.json());  // helps express to understand JSON data send in POST request
app.post("/", (req, res) => {
  res.send(req.body);
});

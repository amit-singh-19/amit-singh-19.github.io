import express from "express";

const app = express();

app.listen(8080, (req, res) => {
  console.log("Server running on port 8080");
});

app.use(express.json());
app.post("/", (req, res) => {
  res.send(req.body);
});

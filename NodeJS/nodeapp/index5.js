import express from "express";

const app = express();

const logger = (req, res, next) => {
  req.message = "Logger";
  next();
};
//if we want to use the middleware anywhere then use (.use)
// app.use(logger);

app.get("/", (req, res) => {
  res.send(req.message);
});

//if we want to use it in specific fucntion then pass the middleware
app.get("/products", logger, (req, res) => {
  res.send(req.message);
});

app.listen(8080, (req, res) => {
  console.log("Server running on port 8080");
});

import express from "express";
import mongoose from "mongoose";
import Router from "./Routes/userRoute.js";

const PORT = 8080;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/lpuStudents").then(() => {
  console.log("Connected to Db!!");
});

app.use(express.json());
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});

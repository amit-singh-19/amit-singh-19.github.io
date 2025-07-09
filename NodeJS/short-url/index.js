import express from "express";
import urlRoute from "./routes/urlRoute.js";
import mongoose from "mongoose";

const app = express();
const PORT = 8080;

mongoose
  .connect("mongodb://127.0.0.1:27017/short-url")
  .then(() => {
    console.log("Connectd to DB..");
  })
  .catch((error) => {
    console.log("Error connecting to DB: ", error);
  });

app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server Started at PORT: ${PORT}`);
});

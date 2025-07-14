import express from "express";
import urlRoute from "./routes/urlRoute.js";
import mongoose from "mongoose";
import path from "path";
import URL from "./models/urlModel.js";
import staticRoute from "./routes/staticRoute.js";

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

app.set("view engine", "ejs"); //telling server that the view engine is ejs
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", staticRoute);
// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find();
//   res.render("home", {
//     urls: allUrls,
//   });
// });
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server Started at PORT: ${PORT}`);
});

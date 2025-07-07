import express from "express";
import mongoose from "mongoose";

const PORT = 8080;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/lpuStudents").then(() => {
  console.log("Connected to DB!!");
});

const userSchema = new mongoose.Schema({ username: { type: String } });
const userModel = mongoose.model("User", userSchema);

app.use(express.json());
//Post route
app.post("/users", async (req, res) => {
  const { username } = req.body;
  const user = await userModel.create({ username });
  res.status(201).json({ message: `Data saved`, user });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

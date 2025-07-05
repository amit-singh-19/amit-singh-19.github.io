import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = "mysecretkey";

const app = express();
mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  console.log("Connected to database...");
});

//models > userModel
const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

app.use(express.json());

// inserting userdata to database
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = {
      name,
      email,
      password: hashPassword,
      role,
    };
    const result = await userModel.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

//login

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) res.status(400).json({ message: "Email not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const userObj = {
        name: user.name,
        email: user.email,
        role: user.role,
      };
      const token = jwt.sign(userObj, SECRET_KEY, { expiresIn: "1h" });
      res.status(201).json({ message: "Login Successful", token: token });
    } else {
      res.status(400).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) res.status(400).json({ message: "No Token Found" });

    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (req.user.role === role) next();
    else res.status(400).json({ message: "Unauthorize Access" });
  };
};

// Fetching users data from database
app.get("/users", authenticate, authorize("admin"), async (req, res) => {
  try {
    const result = await userModel.find();
    res.status(200).json(result);
  } catch (error) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.get("/dashboard", authenticate, (req, res) => {
  try {
    const result = req.user;
    res
      .status(201)
      .json({ message: `Hello, ${result.name}. Welcome to DashBoard!!` });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

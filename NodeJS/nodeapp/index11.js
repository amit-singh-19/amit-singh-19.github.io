import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();
const SECRET_KEY = "mysecretkey";

const users = [];

app.use(express.json());

//Middleware-
const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) res.status(401).json({ message: "No token provided" });
    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invaid Token" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized Access" });
    }
  };
};

//Register User-
app.post("/register", async (req, res) => {
  const { name, email, pass, role } = req.body;
  try {
    const hashedPass = await bcrypt.hash(pass, 10);
    users.push({
      name,
      email,
      pass: hashedPass,
      role,
    });
    res.status(201).json({ message: "Register Successful" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

// Login User-
app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) res.status(401).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(pass, user.pass);
  if (isMatch) {
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ message: "Login Successfull", token });
  } else {
    res.status(403).json({ message: "Invalid Credentials" });
  }
});

// Protected Dashboard
app.get("/dashboard", authenticate, authorize("admin"), (req, res) => {
  res.json(users);
});

app.listen(8080, () => {
  console.log("Server is Running...");
});

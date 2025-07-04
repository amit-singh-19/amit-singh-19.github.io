import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();
const SECRET_KEY = "mysecrectkey";

const users = [];

app.use(express.json());

//Register User-
app.post("/register", async (req, res) => {
  const { name, email, pass, role } = req.body;
  const hashedPass = await bcrypt.hash(pass, SECRET_KEY);
  try {
    users.push({
      name,
      email,
      pass: hashedPass,
      role,
    });
    res.status(201).json({ message: "Register Successfull" });
  } catch (error) {
    res.status(400).json({message: "Something went wrong"})
  }
});

// Login Route-
app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const found = users.find(
    (user) => user.email === email && user.pass === pass
  );
  if (found) {
    const token = jwt.sign(found, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ message: "Login Successfull", token });
  } else {
    res.status(403).json({ message: "Invalid Credentials" });
  }
});

//Middleware-
const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user.role;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invaid Token" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (req.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized Access" });
    }
  };
};

// Protected Dashboard
app.get("/dashboard", authenticate, authorize("admin"), (req, res) => {
  res.json(users);
});

app.listen(8080, () => {
  console.log("Server is Running...");
});

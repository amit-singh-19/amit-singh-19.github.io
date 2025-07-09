import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const { SECRET_KEY } = process.env;

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) res.status(401).json({ message: "No token provided!!" });
    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    // console.log(req.user);
    next();
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Something went wrong" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (req.user.role === role) next();
    else {
      res.status(401).json({ message: "Unauthorized Access" });
    }
  };
};

export { authenticate, authorize };

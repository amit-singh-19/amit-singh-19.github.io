import jwt from "jsonwebtoken";
const SECRET = "sometext";

const user = {
  name: "John",
  email: "john@gmail.com",
  role: "admin",
};

const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
console.log(token);

//fetching user data from token
const decoded = jwt.verify(token, SECRET);
console.log(decoded);

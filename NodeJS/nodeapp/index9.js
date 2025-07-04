//bcrypt module- use to hash password
import bcrypt from "bcrypt";

/*
const pwd = "pass1234";

//bcrypt return promise that's why we have used await here
// const hashedPwd = await bcrypt.hash(pwd, 10); //second parameter is the cost factor and 12 is more secure but it's slow
// console.log(hashedPwd);

const check = await bcrypt.compare(pwd, "$2b$10$ZyIj1RB3cAfTOjf3smpQOue.ttsXs42wJ4Cj7o9XfbtjIv5IJXZ5C");
console.log(check)

*/

import express from "express";
const app = express();
app.use(express.json());

//Sign up
const users = [];
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, hashPassword });
    res.status(201).json({ message: "User Register Successful", users });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

//login
app.post("/login", async (req, res) => {
  const users = {
    name: "Amit",
    email: "amit@gmail.com",
    hashPassword:
      "$2b$10$lVDWFJkYzXjBo09lR48KCOgdG0d8imCPB03b50tA26mKwjuTheiZG"
  };
  try {
    const { email, password } = req.body;
    if (email !== users.email)
      res.status(400).json({ message: "Email not found" });

    const isMatch = await bcrypt.compare(password, users.hashPassword);
    if (isMatch) res.status(201).json({ message: "Login Success" });
    else res.status(401).json({ message: "Incorrect password" });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(8080, () => {
  console.log("Server Running");
});

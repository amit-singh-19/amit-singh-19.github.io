import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import userModel from "../Models/userModel.js";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const register = async (req, res) => {
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
    res
      .status(201)
      .json({ message: "User register successfully", user: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong!!" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const found = await userModel.findOne({ email });
    if (!found) res.status(401).json({ message: "Email not found" });
    const isMatch = await bcrypt.compare(password, found.password);
    if (!isMatch) res.status(401).json({ message: "Incorrect password" });
    else {
      const userObj = {
        name: found.name,
        email: found.email,
        role: found.role,
      };
      const token = jwt.sign(userObj, SECRET_KEY, { expiresIn: "1h" });
      res.status(201).json({
        message: "User Login successfully",
        user: userObj,
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!!" });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await userModel.findByIdAndUpdate(id, body, { new: true });
    res
      .status(201)
      .json({ message: "User data updated successfully", updatedData: result });
  } catch (error) {
    res.status(501).json({ error: "Something went wrong" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.findByIdAndDelete(id);
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(501).json({ message: "Something went wrong" });
  }
};

const showUserDetails = async (req, res) => {
  try {
    const result = await userModel.find();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
};

const showUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findOne({ _id: id });
    if (!user) res.status(404).json({ message: "User not found" });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(501).json({ error: "Something went wrong" });
  }
};

export { register, login, updateUser, deleteUser, showUserDetails, showUser };

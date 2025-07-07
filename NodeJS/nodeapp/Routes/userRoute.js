import express from "express";
import { authenticate, authorize } from "../Middleware/auth.js";
import {
  register,
  login,
  updateUser,
  deleteUser,
  showUser,
  showUserDetails,
} from "../Controller/userController.js";

const Router = express.Router();
Router.post("/register", register);
Router.post("/login", login);
Router.patch("/users/:id", authenticate, authorize("admin"), updateUser);
Router.delete("/users/:id", authenticate, authorize("admin"), deleteUser);
Router.get("/users", authenticate, authorize("admin"), showUserDetails);
Router.get("/users/:id", authenticate, showUser);

export default Router;

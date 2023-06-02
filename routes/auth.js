import express from "express";
const router = express.Router();
import { getAllUsers, login, register } from "../controllers/authController.js";
router.post("/register", register);
router.post("/login", login);
router.get("/users", getAllUsers);

export default router;

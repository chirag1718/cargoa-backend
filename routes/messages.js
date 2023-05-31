import express from "express";
import { manufacturer, transporter } from "../controllers/messageController.js";
const router = express.Router();

router.post("/manufacturer/:id", manufacturer);
router.post("/transporter/:id", transporter);

export default router;

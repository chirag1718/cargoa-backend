import express from "express";
import {
  getManufacturerMessages,
  manufacturer,
  transporter,
} from "../controllers/messageController.js";
const router = express.Router();
// Manufacturer
router.post("/manufacturer/:id", manufacturer);
router.get("/manufacturer/:id", getManufacturerMessages);
// Transporter
router.post("/transporter/:id", transporter);

export default router;

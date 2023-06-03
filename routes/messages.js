import express from "express";
import {
  getAllManufacturerMessages,
  getManufacturerMessages,
  getTransporterMessages,
  manufacturer,
  transporter,
} from "../controllers/messageController.js";
const router = express.Router();
// Manufacturer
router.post("/manufacturer/:id", manufacturer);
router.get("/manufacturer/:id", getManufacturerMessages);
router.get("/manufacturer", getAllManufacturerMessages);
// Transporter
router.put("/transporter/:id", transporter);
router.get("/transporter/:id", getTransporterMessages);

export default router;

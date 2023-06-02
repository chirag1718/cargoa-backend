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
//  TODO if code breaks this might be the reason
// router.get("/manufacturer", getAllManufacturerMessages);
// Transporter
router.put("/transporter/:id", transporter);
router.get("/transporter", getTransporterMessages);

export default router;

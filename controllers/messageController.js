import ManufacturerMessage from "../model/ManufacturerMessage.js";
import User from "../model/User.js";

// Manufacturer controller
// Post a message
export const manufacturer = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  const userAddress = user.address;
  const userID = user.id;
  try {
    // New message
    const newMessage = new ManufacturerMessage({
      orderId: req.body.orderId,
      to: req.body.to,
      from: req.body.from,
      address: userAddress,
      quantity: req.body.quantity,
      transporter: req.body.transporter,
      userId: userID,
    });
    const savedMessage = await newMessage.save();
    console.log(savedMessage);
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get all messages
export const getManufacturerMessages = async (req, res) => {
  try {
    const userid = req.params.id;
    const message = await ManufacturerMessage.find({ userId: userid });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Transporter controller
// post a message
export const transporter = async (req, res) => {
  const messageId = req.params.id;
  try {
    const updatedMessage = await ManufacturerMessage.updateOne(
      { _id: messageId },
      {
        $set: {
          price: req.body.price,
        },
      }
    );
    res.status(201).json(updatedMessage);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};

// TODO - Get all messages for transporter
export const getTransporterMessages = async (req, res) => {
  try {
    const users = await User.find({ role: "manufacturer" });
    const userId = users.map((user) => user._id);
    console.log(userId);
    res.status.json(userId);
  } catch (err) {
    console.log(err);
  }
};

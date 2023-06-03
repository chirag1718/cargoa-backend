import ManufacturerMessage from "../model/ManufacturerMessage.js";
import User from "../model/User.js";

// Manufacturer controller
// Post a message
export const manufacturer = async (req, res) => {
  const manufacturerId = req.params.id;
  const manufacturer = await User.findById(manufacturerId);
  const manufacturerAddress = manufacturer.address;
  try {
    // New message
    const newMessage = new ManufacturerMessage({
      orderId: req.body.orderId,
      to: req.body.to,
      from: req.body.from,
      address: manufacturerAddress,
      quantity: req.body.quantity,
      transporterId: req.body.transporterId,
      manufacturerId: manufacturerId,
    });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getManufacturerMessages = async (req, res) => {
  try {
    // 👇🏻manufacturer id is needed
    const manufacturerId = req.params.id;
    const message = await ManufacturerMessage.find({
      manufacturerId: manufacturerId,
    });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).send(err);
  }
};
// Get all messages
export const getAllManufacturerMessages = async (req, res) => {
  try {
    const message = await ManufacturerMessage.find({});
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
  }
};

// TODO - Get all messages for transporter
export const getTransporterMessages = async (req, res) => {
  try {
    const transporterId = req.params.id;
    const transporterMessages = await ManufacturerMessage.find({
      transporterId: transporterId,
    });
    res.status(200).json(transporterMessages);
  } catch (err) {
    res.status(500).send(err);
  }
};

import ManufacturerMessage from "../model/ManufacturerMessage.js";
import User from "../model/User.js";

// Manufacturer controller
export const manufacturer = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  const orderId = generateOrderId();
  const userAddress = user.address;
  const userID = user.id;
  try {
    // New message
    const newMessage = new ManufacturerMessage({
      orderId: orderId,
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

function generateOrderId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const length = 20; // Length of alphanumeric code
  let orderId = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    orderId += characters[randomIndex];
  }

  return orderId;
}

export const getManufacturerMessages = async (req, res) => {
  try {
    const { userid } = req.params.id;
    const user = await User.findById(userid);
    const message = await ManufacturerMessage.find({ userId: userid });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Transporter controller
export const transporter = async (req, res) => {
  const messageId = req.params.id;
  const message = await ManufacturerMessage.findById(messageId);
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

import Message from "../model/Message.js";
import User from "../model/User.js";

// Manufacturer controller
export const manufacturer = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  const orderId = generateOrderId();
  const userAddress = user.address;
  try {
    // New message
    const newMessage = new Message({
      orderId: orderId,
      to: req.body.to,
      from: req.body.from,
      address: userAddress,
      quantity: req.body.quantity,
      transporter: req.body.transporter,
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

// Transporter controller

export const transporter = async (req, res) => {
  const messageId = req.params.id;
  const message = await Message.findById(messageId);
  const orderId = message.orderId;
  try {
    const newMessage = new Message({
      orderId: orderId,
      price: req.body.price,
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).send(err);
  }
};

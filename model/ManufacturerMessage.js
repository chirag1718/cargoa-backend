import mongoose from "mongoose";

const ManufacturerMessage = mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  transporter: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  // price: {
  //   type: String,
  //   required: true,
  // },
});

export default mongoose.model("Message", ManufacturerMessage);

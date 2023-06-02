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
  transporterId: {
    type: String,
    required: true,
  },
  manufacturerId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
});

export default mongoose.model("manufacturerMessage", ManufacturerMessage);

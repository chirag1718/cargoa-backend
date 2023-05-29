import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    max: 256,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    requiered: true,
    min: 6,
    max: 256,
  },
  role: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);

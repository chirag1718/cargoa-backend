import User from "../model/User.js";
import { loginValidation, registerValidation } from "../userValidation.js";

export const register = async (req, res) => {
  //Validate user credentials
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Check if user email is already registered
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists!");

  //Password hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      role: req.body.role,
    });
    const savedUser = await newUser.save();
    res.status(200).send("User Created Successfully!");
    console.log(savedUsers);
  } catch (err) {
    res.status(400).send(err);
    console.log(err, "Error: Register Controller");
  }
};

export const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.send(400).send(error.details[0].message);

  // Check if user email exists
  const user = await User.findOne({ email: req.body.email });
};

import Joi from "@hapi/joi";

// Register Validation
export const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(6).required(),
    address: Joi.string().required(),
    role: Joi.string().required(),
  });
  return schema.validate(data);
};

// Login Validation
export const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

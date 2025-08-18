import joi from "joi";
import User from "../interface/user.interface";

export const userRegisterSchema: joi.ObjectSchema<User> = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

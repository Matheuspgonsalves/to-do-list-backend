import { Router } from "express";
import { userRegister } from "../controllers/user/register.controllers";

const users = Router();

users.post("/register", userRegister);

export default users;
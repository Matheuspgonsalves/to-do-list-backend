import { Router } from "express";
import { userRegister } from "../controllers/user/register.controllers";
import { userLogin } from "../controllers/user/login.controllers";

const users = Router();

users.post("/register", userRegister);
users.post("/login", userLogin);

export default users;
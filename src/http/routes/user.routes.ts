import { Router } from "express";
import { userRegister } from "../controllers/auth/register.controllers";
import { userLogin } from "../controllers/auth/login.controllers";

const users = Router();

users.post("/register", userRegister);
users.post("/login", userLogin);

export default users;

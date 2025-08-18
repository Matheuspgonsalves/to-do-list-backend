import { Router } from "express";
import users from "./user.routes";

const routes = Router();

routes.use("/user", users);

export default routes;
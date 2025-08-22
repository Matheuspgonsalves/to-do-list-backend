import { Router } from "express";
import users from "./user.routes";
import tasks from "./tasks.routes";
import authMiddleware from "../../middlewares/authentication/auth-middleware";

const routes = Router();

routes.use("/auth", users);
routes.use("/task", authMiddleware.checkToken, tasks);

export default routes;

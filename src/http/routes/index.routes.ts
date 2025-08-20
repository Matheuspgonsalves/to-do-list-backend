import { Router } from "express";
import users from "./user.routes";
// import authMiddleware from "../../middlewares/authentication/auth-middleware";

const routes = Router();

routes.use("/user", users);
// routes.use("/nada", authMiddleware.checkToken,(req: any, res: any) => {res.send({message: "Nada aqui"})});

export default routes;
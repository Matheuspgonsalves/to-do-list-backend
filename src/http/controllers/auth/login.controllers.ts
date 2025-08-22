import { supabase } from "../../../config/supabase";
import authMiddleware from "../../../middlewares/authentication/auth-middleware";
import { userLoginSchema } from "../../../validators/user.validator";
import jwt from "jsonwebtoken";

export const userLogin: any = async (request: any, response: any) => {
  const body: any = request.body;
  const userValidation: any = userLoginSchema.validate(body);

  if (userValidation.error) {
    return response.status(400).send({message: userValidation.error.details[0].message});
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: body.email,
    password: body.password,
  })

  if (error) {
    return response.status(400).send({message: error.message});
  }

  const payload: any = {
    id: data?.user?.id,
    email: data?.user?.email,
    name: data?.user?.user_metadata.name,
  }

  const newAccessToken: string = jwt.sign(payload, authMiddleware.MySecretWord, {expiresIn: "24h"});

  return response.status(200).send({
    message: "OK",
    newAccessToken,
    profile: payload,
  });
}

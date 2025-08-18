import { supabase } from "../../../config/supabase";
import { userLoginSchema } from "../../../validators/user.validator";

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

  return response.status(200).send({message: "OK"});
}
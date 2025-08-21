import { supabase } from "../../../config/supabase";
import { userRegisterSchema } from "../../../validators/user.validator";

export const userRegister: any = async (request: any, response: any) => {
  const body: any = request.body;
  const userValidation: any = userRegisterSchema.validate(body);

  if (userValidation.error) {
    return response.status(400).send({message: userValidation.error.details[0].message});
  }

  const {data, error} = await supabase.auth.signUp({
    email: body.email,
    password: body.password,
    options: {
      data: {
        name: body.name,
      }
    }
  });

  if (error) {
    return response.status(400).send({message: error.message});
  }

  return response.status(201).send({
    message: "Usuário registrado com sucesso",
  });
}

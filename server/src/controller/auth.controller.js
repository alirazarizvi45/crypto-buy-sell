import { userManager } from "../managers/user.js";
import { Errors } from "../utils/error-details.js";
import { userValidation } from "../validations/user.js";

export const register = async (req, res,next) => {
    try{
		const error = userValidation.signup(req.body).error;
        if (error) return res.status(400).send(Errors(error));
        let Exist = await userManager.getByEmail(req.body.email);
  
        if (Exist)
          return res
            .status(400)
            .send(`email already registered, please choose another email.`);
            
            const password = await userManager.hashedPassword(req.body.password);
            const obj = {
                ...req.body,
                password
              };
      
             let user =  await userManager.create(obj);
            return res.status(200).json(user);
    } catch (ex) {
        console.log(ex , "Ex")
		return res.status(500).send(ex.message);
	}
};


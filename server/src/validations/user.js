import Joi from 'joi';
 export const  userValidation = {
  signup: (data) =>
    Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      country: Joi.string().required(),
      referralCode: Joi.string().required(),
    }).validate(data),
};

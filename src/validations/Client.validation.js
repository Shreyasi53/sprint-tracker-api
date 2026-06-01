import Joi from "joi";

export const clientSchema = Joi.object({
  name: Joi.string().required(),
  industry: Joi.string().required(),
  contactEmail: Joi.string().email().required(),
  country: Joi.string().required(),
});
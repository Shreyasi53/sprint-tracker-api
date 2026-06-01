import Joi from "joi";

export const projectSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().valid("ACTIVE", "COMPLETED", "ON_HOLD").required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  clientId: Joi.number().required(),
});

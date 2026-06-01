import Joi from "joi";

export const sprintSchema = Joi.object({
  sprintNumber: Joi.number().required(),
  goal: Joi.string().required(),
  status: Joi.string().valid("PLANNED", "ACTIVE", "COMPLETED").required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  projectId: Joi.number().required(),
});

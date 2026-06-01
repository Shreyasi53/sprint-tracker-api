import Joi from "joi";

export const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  priority: Joi.string().valid("LOW", "MEDIUM", "HIGH", "CRITICAL").required(),
  status: Joi.string()
    .valid("TODO", "IN_PROGRESS", "REVIEW", "DONE")
    .required(),
  estimatedHours: Joi.number().required(),
  actualHours: Joi.number(),
  engineerId: Joi.number().required(),
});
export const updateTaskStatusSchema = Joi.object({
  status: Joi.string()
    .valid("TODO", "IN_PROGRESS", "REVIEW", "DONE")
    .required(),
});

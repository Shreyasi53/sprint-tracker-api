import Task from "../models/Task.model.js";

export const updateTaskStatusService = async (taskId, status) => {
  const task = await Task.findByPk(taskId);
  if (!task) return null;
  
  task.status = status;
  await task.save();
  return task;
};
import Task from "../models/Task.model.js";
import Engineer from "../models/Engineer.model.js";

export const updateTaskStatusService = async (taskId, status) => {
  const task = await Task.findByPk(taskId);
  if (!task) return null;
  const flow = ["TODO", "IN_PROGRESS", "REVIEW", "DONE"];
  const currentIndex = flow.indexOf(task.status);
  const newIndex = flow.indexOf(status);
  if (newIndex !== currentIndex + 1){
    throw new Error(
      `Invalid status transition from ${task.status} to ${status}`
    );
  }

  task.status = status;
  await task.save();
  return task;
};

export const assignEngineerToTaskService = async (taskId, engineerId) => {
  const task = await Task.findByPk(taskId);
  if (!task) return null;

  const engineer = await Engineer.findByPk(engineerId);
  if (!engineer) {
    throw new Error("Engineer not found");
  }
  if(!engineer.isAvailable){
    throw new Error("Engineer is not available");
  }

  task.engineerId = engineerId;
  await task.save();
  return task;
};

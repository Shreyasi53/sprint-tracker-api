import Sprint from "../models/Sprint.model.js";
import Task from "../models/Task.model.js";

export const createSprintService = async (data) => {
  return await Sprint.create(data);
};
export const addTaskToSprintService = async (sprintId, taskData) => {
  return await Task.create({
    ...taskData,
    sprintId,
  });
};
export const getSprintSummaryService = async (sprintId) => {
  const sprint = await Sprint.findByPk(sprintId, {
    include: [Task],
  });

  if (!sprint) return null;

  const tasks = sprint.Tasks;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === "DONE").length;
  const completionPercentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const tasksByPriority = {
    LOW: 0,
    MEDIUM: 0,
    HIGH: 0,
    CRITICAL: 0,
  };

  tasks.forEach((task) => {
    tasksByPriority[task.priority]++;
  });

  return {
    totalTasks,
    completedTasks,
    completionPercentage,
    tasksByPriority,
  };
};

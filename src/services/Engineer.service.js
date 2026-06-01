import Engineer from "../models/Engineer.model.js";
import Task from "../models/Task.model.js";

export const getEngineerWorkloadService = async (engineerId) => {
  const engineer = await Engineer.findByPk(engineerId, {
    include: [Task],
  });
  if (!engineer) return null;

  const activeTasks = engineer.Tasks.filter(
    (task) => task.status !== "DONE",
  ).length;

  const tasksByStatus = {
    TODO: 0,
    IN_PROGRESS: 0,
    REVIEW: 0,
    DONE: 0,
  };

  engineer.Tasks.forEach((task) => {
    tasksByStatus[task.status]++;
  });

  const totalEstimatedHours = engineer.Tasks.reduce(
    (sum, task) => sum + task.estimatedHours,
    0,
  );
  const totalActualHours = engineer.Tasks.reduce(
    (sum, task) => sum + task.actualHours,
    0,
  );
  return {
    engineerId: engineer.id,
    activeTasks,
    tasksByStatus,
    totalEstimatedHours,
    totalActualHours,
  };
};

export const getAvailableEngineersService = async (stack) => {
  const engineers = await Engineer.findAll({
    where: {
      isAvailable: true,
      primaryStack: stack,
    },
    include: [Task],
  });

  const availableEngineers = engineers.filter((engineer) => {
    const activeTasks = engineer.Tasks.filter(
      (task) => task.status !== "DONE"
    ).length;

    return activeTasks < 3;
  });

   return availableEngineers.map((engineer) => ({
    id: engineer.id,
    name: engineer.name,
    email: engineer.email,
    primaryStack: engineer.primaryStack,
    experienceYears: engineer.experienceYears,
    isAvailable: engineer.isAvailable,
  }));
};

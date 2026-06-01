import Project from "../models/Project.model.js";
import Sprint from "../models/Sprint.model.js";
import Task from "../models/Task.model.js";

export const createProjectService = async (data) => {
  return await Project.create(data);
};

export const getProjectSprintsService = async (id) => {
  return await Project.findByPk(id, {
    include: Sprint,
  });
};

export const getProjectHealthService = async (projectId) => {
  const project = await Project.findByPk(projectId, {
    include: [
      {
        model: Sprint,
        include: [Task],
      },
    ],
  });

  if (!project) return null;

  let totalTasks = 0;
  let completedTasks = 0;

  project.Sprints.forEach((sprint) => {
    sprint.Tasks.forEach((task) => {
      totalTasks++;

      if (task.status === "DONE") {
        completedTasks++;
      }
    });
  });

  const completionPercentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  let health = "AT_RISK";

  if (completionPercentage >= 80) {
    health = "GOOD";
  } else if (completionPercentage >= 50) {
    health = "MODERATE";
  }

  return {
    projectId: project.id,
    totalTasks,
    completedTasks,
    completionPercentage,
    health,
  };
};

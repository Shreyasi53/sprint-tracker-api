import Project from "../models/Project.model.js";
import Sprint from "../models/Sprint.model.js";

export const createProjectService = async (data) => {
  return await Project.create(data);
};

export const getProjectSprintsService = async (id) => {
  return await Project.findByPk(id, {
    include: Sprint,
  });
};
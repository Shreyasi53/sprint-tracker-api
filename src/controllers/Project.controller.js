import {
  createProjectService,
  getProjectSprintsService,
} from "../services/Project.service.js";

export const createProject = async (req, res) => {
  try {
    const project = await createProjectService(req.body);

    res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProjectSprints = async (req, res) => {
  try {
    const project = await getProjectSprintsService(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

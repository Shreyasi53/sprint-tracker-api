import {
  createSprintService,
  addTaskToSprintService,
} from "../services/Sprint.service.js";

export const createSprint = async (req, res) => {
  try {
    const sprint = await createSprintService(req.body);

    res.status(201).json({
      success: true,
      data: sprint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addTaskToSprint = async (req, res) => {
  try {
    const task = await addTaskToSprintService(req.params.id, req.body);

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

import {
  createSprintService,
  addTaskToSprintService,
  getSprintSummaryService,
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

export const getSprintSummary = async (req, res) => {
  try {
    const summary = await getSprintSummaryService(req.params.id);

    if (!summary) {
      return res.status(404).json({
        success: false,
        message: "Sprint not found",
      });
    }

    res.status(200).json({
      success: true,
      data: summary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

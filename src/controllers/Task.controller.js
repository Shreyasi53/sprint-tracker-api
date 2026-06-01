import {
  updateTaskStatusService,
  assignEngineerToTaskService,
  getFilteredTasksService,
} from "../services/Task.service.js";

export const updateTaskStatus = async (req, res) => {
  try {
    const task = await updateTaskStatusService(req.params.id, req.body.status);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
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

export const assignEngineerToTask = async (req, res) => {
  try {
    const task = await assignEngineerToTaskService(
      req.params.id,
      req.params.engineerId,
    );
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    res.status(200).json({
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

export const getFilteredTasks = async (req, res) => {
  try {
    const tasks = await getFilteredTasksService(
      req.query.status,
      req.query.priority,
      req.query.sprintId
    );

    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
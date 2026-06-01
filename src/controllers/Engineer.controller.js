import { getEngineerWorkloadService, getAvailableEngineersService} from "../services/Engineer.service.js";

export const getEngineerWorkload = async (req, res) => {
  try {
    const workload = await getEngineerWorkloadService(
      req.params.id
    );

    if (!workload) {
      return res.status(404).json({
        success: false,
        message: "Engineer not found",
      });
    }

    res.status(200).json({
      success: true,
      data: workload,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAvailableEngineers = async (req, res) => {
  try {
    const engineers = await getAvailableEngineersService(
      req.query.stack
    );

    res.status(200).json({
      success: true,
      data: engineers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
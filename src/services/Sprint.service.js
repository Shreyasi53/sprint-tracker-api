import Sprint from "../models/Sprint.model.js";
import Task from "../models/Task.model.js";

export const createSprintService = async(data)=>{
    return await Sprint.create(data);
}
export const addTaskToSprintService = async(sprintId, taskData)=>{
    return await Task.create({
        ...taskData,
        sprintId,
    });
};
import Client from "./Client.model.js";
import Project from "./Project.model.js";
import Sprint from "./Sprint.model.js";
import Task from "./Task.model.js";
import Engineer from "./Engineer.model.js";

//Client -> Project
Client.hasMany(Project, { foreignKey: "clientId"});
Project.belongsTo(Client, { foreignKey: "clientId"});

//Project -> Sprint
Project.hasMany(Sprint, { foreignKey: "projectId"});
Sprint.belongsTo(Project, { foreignKey: "projectId"});

//Sprint -> Task
Sprint.hasMany(Task, { foreignKey: "sprintId"});
Task.belongsTo(Sprint, { foreignKey: "sprintId"});

//Engineer -> Task
Engineer.hasMany(Task, { foreignKey: "engineerId"});
Task.belongsTo(Engineer, { foreignKey: "engineerId"});

export { Client, Project, Sprint, Task, Engineer };
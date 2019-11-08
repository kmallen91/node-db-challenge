const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask
};

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks(id) {
  return db
    .select("t.name as Tasks", "p.name as Project", "pp.id as Project Number")
    .from("project-plan as pp")
    .join("tasks as t", () => {
      this.on("tasks.id", "=", "project-plan.task_id");
    })
    .join("projects as p", () => {
      this.on("p.id", "=", "pp.project_id");
    })
    .where({
      "p.id": id
    });
}

function addProject(project) {
  return db("projects").insert(project);
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function addTask(id, task) {
  return db("task").insert("task");
}

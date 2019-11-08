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
    .select("t.name as Tasks", "p.name as Project")
    .from("projects as p")
    .join("tasks as t", () => {
      this.on("tasks.project_id", "=", "projects.id").where({
        "p.id": id
      });
    });
}

function addProject(project) {
  return db("projects").insert(project);
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function addTask(id, task) {
  return db("task")
    .where(id, "=", task.project_id)
    .insert(task);
}

const express = require("express");
const projects = require("./projectsModel");
const router = express.Router();

router.get("/", (req, res) => {
  projects
    .getProjects()
    .then(project => res.status(200).json(project))
    .catch(err =>
      res.status(500).json({ error: "error getting the projects" })
    );
});

router.get("/resources", (req, res) => {
  projects
    .getResources()
    .then(resource => res.status(200).json({ resource }))
    .catch(err =>
      res.status(500).json({ error: "error gettting the resources" })
    );
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  projects
    .getTasks(id)
    .then(task => res.status(200).json({ task }))
    .catch(err => res.status(500).json({ error: "error getting the tasks" }));
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    projects
      .addProject(req.body)
      .then(project => res.status(201).json(project))
      .catch(err =>
        res.status(500).json({ error: "error adding the project" })
      );
  } else {
    res.status(400).json({ error: "please add a name to your project" });
  }
});

router.post("/resources", (req, res) => {
  const { name } = req.body;
  if (name) {
    projects
      .addResource(req.body)
      .then(resource => res.status(201).json(resource))
      .catch(err =>
        res.status(500).json({ error: "error adding the resource" })
      );
  } else {
    res.status(400).json({ error: "please add a name to your resource" });
  }
});

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { description, project_id } = req.body;
  if (description && project_id === id) {
    projects
      .addTask(req.body)
      .then(task => res.status(201).json(task))
      .catch(err => res.status(500).json({ error: "error adding the task" }));
  } else {
    res
      .status(400)
      .json({
        error: "please provide a description and project_id in your request"
      });
  }
});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

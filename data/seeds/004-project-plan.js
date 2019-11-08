exports.seed = function(knex) {
  // Inserts seed entries
  return knex("project-plan").insert([
    { project_id: 1, resource_id: 1, task_id: 1 },
    { project_id: 1, resource_id: 2, task_id: 1 },
    { project_id: 1, resource_id: 1, task_id: 2 },
    { project_id: 2, resource_id: 1, task_id: 1 },
    { project_id: 2, resource_id: 2, task_id: 1 },
    { project_id: 2, resource_id: 1, task_id: 2 }
  ]);
};

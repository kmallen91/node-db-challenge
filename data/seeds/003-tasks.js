exports.seed = function(knex) {
  // Inserts seed entries
  return knex("tasks").insert([
    { description: "task1", notes: "do this", completed: false, project_id: 1 },
    { description: "task2", notes: "do that", completed: false, project_id: 1 },
    { description: "task2", notes: "do that", completed: false, project_id: 2 },
    { description: "task2", notes: "do that", completed: false, project_id: 2 }
  ]);
};

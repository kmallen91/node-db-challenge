exports.seed = function(knex) {
  // Inserts seed entries
  return knex("tasks").insert([
    { description: "task1", notes: "do this", completed: false },
    { description: "task2", notes: "do that", completed: false }
  ]);
};

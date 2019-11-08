exports.seed = function(knex) {
  // Inserts seed entries
  return knex("projects").insert([
    { name: "project 1", description: "", completed: false },
    { name: "project 2", description: "", completed: false }
  ]);
};

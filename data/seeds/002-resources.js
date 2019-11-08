exports.seed = function(knex) {
  // Inserts seed entries
  return knex("resources").insert([
    { name: "resource 1", description: "person" },
    { name: "resource 2", description: "thing" }
  ]);
};

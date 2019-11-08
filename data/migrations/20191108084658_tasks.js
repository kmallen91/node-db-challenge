exports.up = function(knex) {
  return knex.schema.createTable("tasks", table => {
    table.increments();
    table.string("description", 512).notNullable();
    table.string("notes", 512);
    table.boolean("completed").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};

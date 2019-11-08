exports.up = function(knex) {
  return knex.schema.createTable("projects", table => {
    table.increments();
    table.string("name", 255).notNullable();
    table.string("description", 512);
    table.boolean("completed").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};

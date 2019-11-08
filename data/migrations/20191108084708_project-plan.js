exports.up = function(knex) {
  knex.schema.createTable("project-plan", table => {
    table.increments();
    table
      .integer("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("task_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("tasks")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("resource_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("resources")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("project-plan");
};

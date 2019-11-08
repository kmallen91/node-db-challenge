exports.up = function(knex) {
  return knex.schema.createTable("resources", table => {
    table.increments();
    table.string("name", 255).notNullable();
    table.string("description", 512);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};

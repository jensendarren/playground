exports.up = function(knex, Promise) {
    return knex.schema.createTable('developers', function(table) {
        table.increments();
        table.string('email').notNullable();
        table.string('first_name').notNullable();
        table.string('middle_names').notNullable();
        table.string('last_name').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('developers');
}
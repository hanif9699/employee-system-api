exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('user_id').primary();
        table.string('employee_name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('password', 255).notNullable();
        table.timestamps(true,true)
     }).createTable('roles', function (table) {
        table.increments('role_id').primary();
        table.string('role').notNullable();
     })
     .table('users',function(table){
        table.integer('user_role').unsigned().references('role_id').inTable('roles');
     })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("role")
};

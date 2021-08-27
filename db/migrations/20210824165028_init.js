
exports.up = function(knex) {
    return knex.schema.createTable('manager', function (table) {
        table.increments('manager_id').primary();
        table.integer('emp_id').unsigned().references('user_id').inTable('users')
     }).createTable('department', function (table) {
        table.increments('department_id').primary();
        table.string('department_name',255);
     }).createTable('team_lead', function (table) {
        table.increments('lead_id').primary();
        table.integer('emp_id').unsigned().references('user_id').inTable('users');
        table.integer('dep_id').unsigned().references('department_id').inTable('department')
     })
     .createTable('hr', function (table) {
        table.increments('hr_id').primary();
        table.integer('emp_id').unsigned().references('user_id').inTable('users');
     }).createTable('employee_manager_mapping', function (table) {
        table.increments('employee_manager_mapping_id').primary();
        table.integer('emp_id').unsigned().references('user_id').inTable('users');
        table.integer('manager_id').unsigned().references('manager_id').inTable('manager');
     }).createTable('work_from_home_log_status', function (table) {
        table.increments('work_from_home_log_status_id').primary();
        table.string('work_from_home_log_status_name', 255).notNullable();
     }).createTable('work_from_home_log', function (table) {
        table.increments('work_from_home_log_id').primary();
        table.integer('emp_id').unsigned().references('user_id').inTable('users');
        table.integer('status').unsigned().references('work_from_home_log_status_id').inTable('work_from_home_log_status');
        table.string('Note', 255);
        table.date('work_log_date');
        table.integer('status_updated_by').unsigned().references('manager_id').inTable('manager');
     }).
     createTable('work_from_home_log_details', function (table) {
        table.increments('work_from_home_log_details_id').primary();
        table.integer('wfh_id').unsigned().references('work_from_home_log_id').inTable('work_from_home_log');
        table.string('task_description', 255)
        table.time('task_start_time')
        table.time('task_end_time')
     })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("manager")
    .dropTableIfExists("team_lead")
    .dropTableIfExists("hr")
    .dropTableIfExists("department")
    .dropTableIfExists("employee_manager_mapping")
    .dropTableIfExists("work_from_home_log_status")
    .dropTableIfExists("work_from_home_log")
    .dropTableIfExists("work_from_home_log_details")

};

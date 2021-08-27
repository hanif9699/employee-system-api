
exports.up = function (knex) {
    return knex.schema.alterTable('work_from_home_log_details', function (table) {
        table.string('task_description',2000).alter();
    })
};

exports.down = function (knex) {

};

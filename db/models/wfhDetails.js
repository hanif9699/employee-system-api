const { Model } = require('objection');
// const db = require('../db')
// Model.knex(db)

class WFHDetails extends Model {
    static get tableName() {
        return 'work_from_home_log_details';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                work_from_home_log_details_id: { type: 'integer' },
                wfh_id: { type: 'integer' },
                task_description:{type:'string'},
                task_start_time:{type:'string'},
                task_end_time:{type:'string'}
            }
        };
    }
}
module.exports = WFHDetails;
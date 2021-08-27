const { Model } = require('objection');
// const db = require('../db')
// Model.knex(db)

class WFH extends Model {
    static get tableName() {
        return 'work_from_home_log';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                work_from_home_log_id: { type: 'integer' },
                emp_id: { type: 'integer' },
                status:{ type: 'integer' },
                Note:{type:'string'},
                work_log_date:{type:'string'},
                status_updated_by:{type:'integer'}
            }
        };
    }
    static get relationMappings() {
        return {
            submitted_user:{
                relation: Model.HasOneRelation,
                modelClass: require('./user'),
                join: {
                    from: 'work_from_home_log.emp_id',
                    to: 'users.user_id'
                }
            },
            approved_by:{
                relation: Model.HasOneRelation,
                modelClass: require('./manager'),
                join: {
                    from: 'work_from_home_log.status_updated_by',
                    to: 'manager.manager_id'
                }
            },
            log_details:{
                relation: Model.HasManyRelation,
                modelClass: require('./wfhDetails'),
                join: {
                    from: 'work_from_home_log.work_from_home_log_id',
                    to: 'work_from_home_log_details.wfh_id'
                }
            }
        }
    }
}
module.exports = WFH;
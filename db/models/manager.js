const { Model } = require('objection');
// const db = require('../db')
// Model.knex(db)

class Manager extends Model {
    static get tableName() {
        return 'manager';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                manager_id: { type: 'integer' },
                emp_id: { type: 'integer' },
            }
        };
    }
    static get relationMappings() {
        return {
            managerDetail: {
                relation: Model.HasOneRelation,
                modelClass: require('./user'),
                join: {
                    from: 'manager.emp_id',
                    to: 'users.user_id'
                }
            },
            employees: {
                relation: Model.ManyToManyRelation,
                modelClass: require('./user'),
                join: {
                    from: 'manager.manager_id',
                    through: {
                        from: 'employee_manager_mapping.manager_id',
                        to: 'employee_manager_mapping.emp_id'
                    },
                    to: 'users.user_id'
                }
            }
        };
    }
}
module.exports = Manager;
const { Model } = require('objection');
// const db = require('../db')
// Model.knex(db)

class Department extends Model {
    static get tableName() {
        return 'department';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                department_id: { type: 'integer' },
                department_name: { type: 'string' },
            }
        };
    }
}
module.exports = Department;
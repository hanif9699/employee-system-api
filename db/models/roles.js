const { Model } = require('objection');
// const db = require('../db')
// Model.knex(db)

class Role extends Model {
    static get tableName() {
        return 'roles';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['role'],
            properties: {
                roles_id: { type: 'integer' },
                role: { type: 'string' },
            }
        };
    }
}
module.exports = Role;
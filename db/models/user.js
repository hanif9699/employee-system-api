const { Model } = require('objection');
const crypto = require('crypto');
// const db = require('../db')
// Model.knex(db)
class User extends Model {
    static get tableName() {
        return 'users';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'employee_name', 'password'],
            properties: {
                user_id: { type: 'integer' },
                employee_name: { type: 'string' },
                password: { type: 'string' },
                user_role: { type: 'string' },
                email:{type:'string'}
            }
        };
    }
    static get relationMappings() {
        return {
            role: {
                relation: Model.HasOneRelation,
                modelClass: require('./roles'),
                join: {
                    from: 'users.user_role',
                    to: 'roles.role_id'
                }
            },
            managers: {
                relation: Model.ManyToManyRelation,
                modelClass: require('./manager'),
                join: {
                    from: 'users.user_id',
                    through: {
                        from: 'employee_manager_mapping.emp_id',
                        to: 'employee_manager_mapping.manager_id'
                    },
                    to: 'manager.manager_id'
                }
            },
            isManagers: {
                relation: Model.HasOneRelation,
                modelClass: require('./manager'),
                join: {
                    from: 'users.user_id',
                    to: 'manager.emp_id'
                }
            }
        };
    }
    generatePassword() {
        if (this.password) {
            this.password = crypto.createHash('md5').update(this.password).digest("hex")
        }
    }
    isManager(){
        
    }
    async getRole(){
        const roleObj= await this.$relatedQuery('role')
        return roleObj.role
    }
    verifyPassword(pwd) {
        return crypto.createHash('md5').update(pwd).digest("hex") === this.password
    }
    async $beforeUpdate(opt, context) {
        await super.$beforeUpdate(opt, context)
        if (!(opt.patch && this.password === undefined)) {
            this.generatePassword()
        }
    }
    async $beforeInsert(context) {
        await super.$beforeInsert(context)

        this.generatePassword()
        if(!this.user_role){
            this.user_role=1; 
        }
    }
}
module.exports = User;
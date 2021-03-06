// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'hr_system',
      user:     'root',
      password: 'badsha',
      host: 'mysql'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'hr_system',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds:{
      directory:'./seeds'
    }
  }

};

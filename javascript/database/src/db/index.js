const knexjs = require('knex');

const db = knexjs({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: { tableName: 'migrations' },
  pool: { min: 0, max: 10 },
});

module.exports = db;

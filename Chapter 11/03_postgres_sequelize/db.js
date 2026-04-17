// 03_postgres_sequelize/db.js
// Sequelize instance configuration for PostgreSQL.

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'chapter11_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    dialect: 'postgres',
    logging: false
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected via Sequelize');
  } catch (err) {
    console.error('Unable to connect to Postgres:', err.message);
    process.exit(1);
  }
}

module.exports = { sequelize, connectDB };

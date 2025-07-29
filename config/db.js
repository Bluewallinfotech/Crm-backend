const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || "postgres",
    logging: false, // Optional: disable SQL logging
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Render PostgreSQL uses SSL
      },
    },
  }
);

module.exports = sequelize;

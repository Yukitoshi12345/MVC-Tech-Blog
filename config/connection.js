// Import the Sequelize library for connecting to databases
const Sequelize = require('sequelize');

// Use "dotenv" to access environment variables from a `.env` file
require('dotenv').config();

// Create a Sequelize connection instance
const sequelize = new Sequelize(
  // Read database name from the environment variable DB_NAME
  process.env.DB_NAME,
  // Read database user from the environment variable DB_USER
  process.env.DB_USER,
  // Read database password from the environment variable DB_PASSWORD
  process.env.DB_PASSWORD,

  // Additional connection options
  {
    host: 'localhost', // Database host (localhost in this case)
    dialect: 'mysql', // Database dialect (MySQL in this case)
    port: 3306, // Database port (default MySQL port)
  },
);

// Export the Sequelize instance for use in other modules
module.exports = sequelize;

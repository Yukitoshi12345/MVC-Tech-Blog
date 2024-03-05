// Import the Sequelize connection instance
const sequelize = require('../config/connection');

// Import the seeding functions for each model
const seedComment = require('./commentData');
const seedPost = require('./postData');
const seedUser = require('./userData');

// Define an async function to execute all seeding tasks
const seedAll = async () => {
  try {
    // Synchronise database schema with model definitions (forcefully recreating tables)
    await sequelize.sync({ force: true });

    // Sequentially seed comments, posts, and users
    await seedComment();
    await seedPost();
    await seedUser();

    // Exit the process cleanly
    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1); // Exit with a non-zero status code to indicate failure
  }
};

// Invoke the seeding process
seedAll();

// Import the User model from the '../models' directory
const { User } = require('../models');

// Define an array of user data, each object representing a new user
const userData = [
  // User 1 details
  {
    username: 'yukitoshi32',
    email: 'yukitoshi@gmail.com',
    password: 'yukitoshi123',
  },

  // User 2 details
  {
    username: 'suyash25',
    email: 'suyash@outlook.com',
    password: 'suyash345',
  },

  // User 3 details
  {
    username: 'jaya234',
    email: 'jaya@hotmail.com',
    password: 'jaya5678',
  },

  // User 4 details
  {
    username: 'jonathan43',
    email: 'jonathan@yahoo.com',
    password: 'jonathan21yrold',
  },

  // User 5 details
  {
    username: 'stacey1000',
    email: 'stacey@gmail.com',
    password: 'stacey23',
  },
];

// Define a function `seedUsers` to create users in bulk
const seedUsers = async () =>
  // Use the User model to create multiple users in one operation using 'bulkCreate'
  await User.bulkCreate(userData);

// Export the `seedUsers` function to be used in other parts of the application
module.exports = seedUsers;

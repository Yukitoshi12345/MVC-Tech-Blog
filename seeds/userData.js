const { User } = require('../models');

const userData = [
  {
    username: 'yukitoshi32',
    email: 'yukitoshi@gmail.com',
    password: 'yukitoshi123',
  },
  {
    username: 'suyash25',
    email: 'suyash@outlook.com',
    password: 'suyash345',
  },
  {
    username: 'jaya234',
    email: 'jaya@hotmail.com',
    password: 'jaya5678',
  },
  {
    username: 'jonathan43',
    email: 'jonathan@yahoo.com',
    password: 'jonathan21yrold',
  },
  {
    username: 'stacey1000',
    email: 'stacey@gmail.com',
    password: 'stacey23',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

// 1. Import necessary modules
// - Import the `Model` and `DataTypes` classes from the Sequelize library for model creation and defining data types.
// - Import the `bcrypt` library for password hashing and encryption.
// - Import the configuration for connecting to the database.
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// 2. Create a User model class
class User extends Model {
  // 3. Define a method to check passwords for authentication
  checkPassword(loginPw) {
    // Use bcrypt.compareSync to securely compare the provided login password with the stored hashed password.
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// 4. Initialize the User model with attributes and options
User.init(
  // Define the model's attributes
  {
    // Primary key, set as an auto-incrementing integer
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Unique username with validation for alphanumeric characters
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        isAlphanumeric: true,
      },
    },

    // Unique email with validation for email format
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notNull: true,
        notEmpty: true,
      },
    },

    // Password with validation for strength and security
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/i,
      },
    },
  },
  // Options for the model
  {
    // Hooks for password hashing before creating or updating a user
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10,
        );
        return updatedUserData;
      },
    },
    // Use the configured database connection
    sequelize,
    // Disable timestamps (createdAt and updatedAt)
    timestamps: false,
    freezeTableName: true, // Prevent Sequelize from adding pluralisation
    underscored: true, // Use snake_case for attributes
    modelName: 'user', // Set the model name
  },
);

// Export the User model for use in other parts of the application
module.exports = User;

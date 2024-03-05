// 1. Import necessary modules
// - Import the `Model` and `DataTypes` classes from Sequelize for model creation and defining data types.
// - Import the Sequelize connection from the `/config/connection` file.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// 2. Define the Comment model class
class Comment extends Model {}

// 3. Initialise the Comment model with attributes and options
Comment.init(
  // Define the model's attributes
  {
    // Primary key, set as an auto-incrementing integer
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Comment content, must be unique
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },

    // Date the comment was created, set to current date by default
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    // Foreign key referencing the user who created the comment
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // References the 'user' model
        key: 'id', // References the 'id' field in the 'user' model
      },
    },

    // Foreign key referencing the post the comment belongs to
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post', // References the 'post' model
        key: 'id', // References the 'id' field in the 'post' model
      },
    },
  },

  // Options for the model
  {
    // Use the configured database connection
    sequelize,
    // Disable timestamps (createdAt and updatedAt)
    timestamps: false,
    freezeTableName: true, // Prevent Sequelize from adding pluralisation
    underscored: true, // Use snake_case for attributes
    modelName: 'comment', // Set the model name
  },
);

// Export the Comment model for use in other parts of the application
module.exports = Comment;

// 1. Import necessary modules
// - Import the `Model` and `DataTypes` classes from Sequelize for model creation and defining data types.
// - Import the Sequelize connection from the `/config/connection` file.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// 2. Define the Post model class
class Post extends Model {}

// 3. Initialise the Post model with attributes and options
Post.init(
  // Define the model's attributes
  {
    // Primary key, set as an auto-incrementing integer
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Unique post title with a maximum length of 25 characters
    title: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },

    // Unique post content
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    // Date the post was created, set to current date by default
    date_created: {
      type: DataTypes.DATEONLY, // Stores only date (without time)
      allowNull: false,
      defaultValue: DataTypes.NOW, // Sets the default value to the current date
    },
    // Foreign key referencing the user who created the post
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // References the 'user' model
        key: 'id', // References the 'id' field in the 'user' model
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
    modelName: 'post', // Set the model name
  },
);

// Export the Post model for use in other parts of the application
module.exports = Post;

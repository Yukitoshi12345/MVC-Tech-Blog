// User has many post
// Post belong to user
// Post has many comments
// Comments belong to user
// User has many comments
// Comment belong to post

// Import the necessary models for defining relationships
const Comment = require('./comment');
const Post = require('./post');
const User = require('./user');

// Establish relationships between models:

// 1.  User has many posts:
User.hasMany(Post, {
  foreignKey: 'user_id', // Specify the foreign key in the Post model that references the User model
});

// 2.  Post belongs to a user:
Post.belongsTo(User, {
  foreignKey: 'user_id', // Specify the foreign key in the Post model that references the User model
});

// 3.  Post has many comments:
Post.hasMany(Comment, {
  foreignKey: 'post_id', // Specify the foreign key in the Comment model that references the Post model
  onDelete: 'CASCADE', // Delete associated comments when a post is deleted
});

// 4.  Comment belongs to a user:
Comment.belongsTo(User, {
  foreignKey: 'user_id', // Specify the foreign key in the Comment model that references the User model
});

// 5.  User has many comments:
User.hasMany(Comment, {
  foreignKey: 'user_id', // Specify the foreign key in the Comment model that references the User model
});

// 6.  Comment belongs to a post:
Comment.belongsTo(Post, {
  foreignKey: 'post_id', // Specify the foreign key in the Comment model that references the Post model
});

// Export the models for use in other parts of the application
module.exports = { Comment, Post, User };

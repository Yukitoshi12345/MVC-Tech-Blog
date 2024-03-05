// User has many post
// Post belong to user
// Post has many comments
// Comments belong to user
// User has many comments
// Comment belong to post

const User = require('./user');
const Comment = require('./comment');
const Post = require('./post');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { Comment, Post, User };

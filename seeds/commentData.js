// Import the Comment model from the '../models' directory
const { Comment } = require('../models');

// Define an array of comment data, each object representing a new comment
const commentData = [
  // Comment 1: Positive and insightful response
  {
    content: 'I never thought of it that way, but it makes perfect sense!', // Comment text
    user_id: '2', // ID of the user who posted the comment
    post_id: '1', // ID of the post this comment belongs to
  },

  // Comment 2: Generic and uninformative response
  {
    content: 'Thats something I guess...', // Comment text
    user_id: '2', // ID of the user who posted the comment
    post_id: '2', // ID of the post this comment belongs to
  },

  // Comment 3: Appreciative and informative response
  {
    content:
      'This is such a well-written and insightful post. I learned a lot!', // Comment text
    user_id: '1', // ID of the user who posted the comment
    post_id: '2', // ID of the post this comment belongs to
  },

  // Comment 4: Appreciative of unique perspective
  {
    content:
      "Thank you for sharing your unique perspective on this topic. It's refreshing to see a different viewpoint", // Comment text
    user_id: '3', // ID of the user who posted the comment
    post_id: '1', // ID of the post this comment belongs to
  },
];

// Define a function `seedComment` to create comments in bulk
const seedComment = () => Comment.bulkCreate(commentData);

// Use the Comment model to create multiple comments in one operation using 'bulkCreate'
module.exports = seedComment;

const { Comment } = require('../models');

const commentData = [
  {
    content: 'I never thought of it that way, but it makes perfect sense!',
    user_id: '2',
    post_id: '1',
  },
  {
    content: 'Thats something I guess...',
    user_id: '2',
    post_id: '2',
  },
  {
    content:
      'This is such a well-written and insightful post. I learned a lot!',
    user_id: '1',
    post_id: '2',
  },
  {
    content:
      "Thank you for sharing your unique perspective on this topic. It's refreshing to see a different viewpoint",
    user_id: '3',
    post_id: '1',
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

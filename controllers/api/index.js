// Import the `Router` class from Express to create a router object
const router = require('express').Router();

// Import the routes from separate files for better organisation
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');

// Mount the imported route handlers under specific paths
router.use('/comments', commentRoutes); // Use commentRoutes for requests starting with '/comments'
router.use('/posts', postRoutes); // Use postRoutes for requests starting with '/posts'
router.use('/users', userRoutes); // Use userRoutes for requests starting with '/users'

// Export the router object to be used in the main application file
module.exports = router;

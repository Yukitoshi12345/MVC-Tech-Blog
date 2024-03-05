// Define a middleware function called `withAuth` that takes three arguments:
//   - `req`: The incoming HTTP request object
//   - `res`: The outgoing HTTP response object
//   - `next`: A function to call to continue processing the request
const withAuth = (req, res, next) => {
  // Check if the user is logged in by looking for a `logged_in` property in the session
  if (!req.session.logged_in) {
    // If not logged in, redirect the user to the login route (`/login`)
    res.redirect('/login');
  } else {
    // If logged in, call the `next` function to continue processing the request
    next();
  }
};

// Export the `withAuth` function as a module
module.exports = withAuth;

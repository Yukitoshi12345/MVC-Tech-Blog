// Import the Express Router and User model
const router = require('express').Router();
const { User } = require('../../models');

// **User Registration Route:**
router.post('/', async (req, res) => {
  // Attempt to create a new user using the provided data
  try {
    const userData = await User.create(req.body);

    // After successful creation, save the session before sending response
    req.session.save(() => {
      // Set user ID and logged_in flag in the session
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Respond with the created user data and a 200 status code (OK)
      res.status(200).json(userData);
    });
  } catch (err) {
    // Handle errors during user creation
    res.status(400).json(err); // Respond with a 400 status code (Bad Request) and the error message
  }
});

// **User Login Route:**
router.post('/login', async (req, res) => {
  try {
    // Find the user by email address
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If no user found, respond with an error message
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return; // Exit the function early to avoid further execution
    }

    // Check if the provided password matches the user's hashed password
    const validPassword = await userData.checkPassword(req.body.password);

    // If password is incorrect, respond with an error message
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return; // Exit the function early to avoid further execution
    }

    // Save the session after successful login
    req.session.save(() => {
      // Set user ID and logged_in flag in the session
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Respond with the user data and a success message
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    // Handle errors during login process
    res.status(400).json(err); // Respond with a 400 status code (Bad Request) and the error message
  }
});

// **User Logout Route:**
router.post('/logout', (req, res) => {
  // Check if the user is currently logged in
  if (req.session.logged_in) {
    // Destroy the session to log the user out
    req.session.destroy(() => {
      // Respond with a 204 No Content status code on successful logout
      res.status(204).end();
    });
  } else {
    // Respond with a 404 Not Found status code if the user is not logged in
    res.status(404).end();
  }
});

// Export the router object for use in other parts of the application
module.exports = router;

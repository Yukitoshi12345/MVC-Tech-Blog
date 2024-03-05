// Custom middleware that logs out the type and path of each request to the server
// This line defines a constant named `clog` that holds a function
// This function will be used as middleware
const clog = (req, res, next) => {
  // Define a constant for the cyan color code used for formatting console output
  const fgCyan = '\x1b[36m';
  // Use a switch statement to handle different HTTP methods
  switch (req.method) {
    case 'GET': {
      // Log a green colored message for GET requests
      console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      // Log a blue colored message for POST requests
      console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    default:
      // Log an orange colored message for any other method
      console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
  }

  // Call the next middleware function in the chain
  next();
};

// Export the `clog` function to be used in other parts of the application
exports.clog = clog;

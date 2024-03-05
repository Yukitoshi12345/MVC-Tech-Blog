// Require necessary modules
const path = require('path'); // For path manipulation
const express = require('express'); // Web framework
const session = require('express-session'); // Session management middleware
const exphbs = require('express-handlebars'); // Templating engine
const routes = require('./controllers'); // Import routes from the controllers folder
const helpers = require('./utils/helpers'); // Import custom Handlebars helpers

// Database connection and session store configuration
const sequelize = require('./config/connection'); // Sequelize database connection
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Connect-session-sequelize for Sequelize session storage

// Initialise Express application
const app = express();
// Define the port to listen on (from environment variable or default)
const PORT = process.env.PORT || 3001;

// **Handlebars setup**
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// TODO: Update this:
// Configure session with secret key and options
const sess = {
  secret: 'Super secret secret', // Replace with a strong, unique secret
  cookie: {
    maxAge: 300000, // Session expiration in milliseconds (5 minutes)
    httpOnly: true, // Protect cookie from client-side scripting attacks
    secure: false, // Set to true for HTTPS connections only
    sameSite: 'strict', // Mitigate cross-site request forgery (CSRF) attacks
  },
  resave: false, // Don't resave session if unmodified
  saveUninitialized: true, // Create session object even if unmodified
  store: new SequelizeStore({
    // Use Sequelize for session storage
    db: sequelize, // Pass the Sequelize instance
  }),
};

// Apply session middleware with the configured options
app.use(session(sess));

// Set Handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Parse incoming JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the `public` directory
app.use(express.static(path.join(__dirname, 'public')));

// Mount the routes from the controllers folder
app.use(routes);

// Synchronise the database schema (without force dropping data)
sequelize.sync({ force: false }).then(() => {
  // Start the server and log a message
  app.listen(PORT, () => console.log('Now listening'));
});

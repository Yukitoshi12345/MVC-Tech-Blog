// Import the User model from the '../models' directory
const { Post } = require('../models');

// Define an array of post data, each object representing a new posts
const postData = [
  // Post 1 details
  {
    title:
      'The Future of Front-End Development: Embracing New Frameworks and Trends',
    content: `
    The landscape of front-end development is constantly evolving, with new frameworks and trends emerging to push the boundaries of user experience and functionality. 
    Embracing these advancements is crucial for developers to stay ahead of the curve. This not only involves exploring innovative frameworks like Svelte, Astro, and Qwik, but also delving deeper into concepts like AI-powered tools and user experience optimisation. 
    By actively engaging with these advancements, front-end developers can create captivating and dynamic web experiences that cater to the ever-changing needs of users and the web itself.`,
    user_id: 1,
  },

  // Post 2 details
  {
    title:
      'Data Visualisation: Transforming Numbers into Compelling Stories and Actionable Insights',
    content: `
    In today's data-driven world, deciphering raw numbers and extracting meaningful insights can be a daunting task. Data visualisation emerges as a hero, transforming dry statistics into compelling narratives that resonate with audiences. 
    By employing powerful tools and captivating visuals, data visualisation allows us to uncover hidden patterns, identify trends, and communicate complex information in a clear and impactful way. This not only fosters better understanding but also empowers informed decision-making, transforming data into actionable insights that drive progress across various fields.`,
    user_id: 3,
  },

  // Post 3 details
  {
    title:
      'From Design to Deployment: A Practical Guide to Building Modern Web Applications',
    content: `
    Transforming stunning designs into functional and engaging web applications requires a comprehensive understanding of the development process.
    This journey begins with translating design mockups into code, ensuring user interface elements come to life. Backend functionalities are then developed to handle data processing, user interactions, and server-side logic. 
    Finally, the application is meticulously tested and deployed to a reliable hosting environment, making it readily accessible to users. This guide aims to demystify each step of this exciting journey, equipping you with the practical knowledge to navigate the path from design to deployment and build modern web applications that captivate audiences.`,
    user_id: 1,
  },

  // Post 4 details
  {
    title:
      'Contrasting Pairings: Introverts vs. Extroverts: Debunking Myths and Finding Common Ground',
    content: `
    Our world often paints a picture of introverts and extroverts as polar opposites - the quiet souls versus the life of the party. However, reality is far more nuanced. 
    This exploration delves into the fascinating world of these personality types, debunking common myths and misconceptions. We'll discover that introverts and extroverts possess unique strengths and weaknesses, and often share more common ground than we might initially believe.
    By fostering understanding and appreciating the diverse perspectives each personality type brings, we can cultivate a more inclusive and collaborative environment for everyone.`,
    user_id: 2,
  },

  // Post 5 details
  {
    title:
      'Beyond the Hype: Understanding the Practical Applications of Machine Learning',
    content: `
    While headlines may tout the revolutionary potential of machine learning (ML), it's crucial to move beyond the hype and understand its practical applications in our daily lives.
    ML algorithms are not just confined to science fiction; they are already playing a significant role in various domains. From filtering your social media feed to recommending your next favorite song, ML algorithms analyse vast amounts of data to personalise experiences and automate tasks. 
    Understanding these practical applications allows us to appreciate the real-world impact of ML and its potential to shape the future across diverse industries, from healthcare and finance to transportation and entertainment.`,
    user_id: 3,
  },
];

// Define a function `seedPost` to create post in bulk
const seedPost = async () =>
  // Use the Post model to create multiple posts in one operation using 'bulkCreate'
  await Post.bulkCreate(postData);

// Export the `seedPost` function to be used in other parts of the application
module.exports = seedPost;

// Import the express module to create and manage the server
import express from 'express';

// Import the function to connect to the database from the dbConfig file
import { connectDB } from './Config/dbConfig.js';

// Initialize an Express application instance
const app = express();

// Set the server to listen on port 3000
const PORT = 3000;

// Define a sample GET route to respond with a welcome message
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

// Define a POST route to handle user data and send a response
app.post('/users', (req, res) => {
  // Extract 'name' and 'email' from the request body
  const { name, email } = req.body;

  // Send back a response with the name and email values
  res.send(`Name: ${name}, Email: ${email}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message to indicate the server is running
  console.log(`Server running on port ${PORT}`);

  // Call the connectDB function to establish a database connection
  connectDB();
});

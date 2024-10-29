// Import the mongoose library to interact with MongoDB
import mongoose from "mongoose";

// Import the MongoDB URL from the server configuration file
import { DB_URL } from "./serverConfig.js";

// Define an asynchronous function to connect to the MongoDB database
export const connectDB = async () => {
    try {
        // Attempt to establish a connection to the MongoDB database using the provided URL
        await mongoose.connect(DB_URL);

        // Log a success message to the console if the connection is successful
        console.log("Connected to MongoDB");
    } catch (error) {
        // Log a generic error message if there is an issue connecting to MongoDB
        console.log("Error connecting to MongoDB:");

        // Log the specific error details to help with troubleshooting
        console.error(error); // Use console.error for better visibility of errors
    }
};

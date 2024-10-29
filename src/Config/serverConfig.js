// Import the 'dotenv' package to load environment variables from a .env file
import dotenvenv from "dotenv";

// Configure dotenv to load environment variables from the .env file into process.env
dotenvenv.config();

// Export the database URL stored in the environment variable DB_URL for use in other files
export const DB_URL = process.env.DB_URL;

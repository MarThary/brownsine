// File: api/content.js

// Import the 'fs' module to read files and 'path' to resolve file paths.
const fs = require('fs');
const path = require('path');

// This is the main serverless function that Vercel will execute.
module.exports = (req, res) => {
  // Use path.resolve to find the Q&A.json file from the root directory.
  const contentPath = path.resolve('./Q&A.json');
  
  try {
    // Read the content of the JSON file synchronously.
    const data = fs.readFileSync(contentPath, 'utf8');

    // Set the response header to indicate that the content is a JSON file.
    res.setHeader('Content-Type', 'application/json');

    // Send the JSON data as the response.
    res.status(200).send(data);
  } catch (error) {
    // If the file cannot be read, send a 500 error response.
    console.error("Error reading file:", error);
    res.status(500).send('Error reading content file.');
  }
};

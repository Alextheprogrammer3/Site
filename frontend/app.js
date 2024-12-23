const express = require('express');

// Create an express app instance
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Set the port number
const PORT = process.env.PORT || 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Serve your index.html file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

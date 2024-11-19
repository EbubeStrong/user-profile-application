// index.js
const express = require('express');
const User = require('./user');

const app = express();
const PORT = 3000;

// Create a sample user instance
const user = new User('John Doe', 30, 'john.doe@example.com');

// Define a route to serve user information
app.get('/user', (req, res) => {
    res.json({
        name: user.name,
        age: user.age,
        email: user.email,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`);
});
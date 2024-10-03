const http = require('http');
const crypt = require('./cipher.js');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3500;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// POST endpoint to handle incoming data
app.post('/data', (req, res) => {
    const { message } = req.body; // Extract the message from the request body
    if (!message) {
        return res.status(400).send('Message is required'); // Handle missing message
    }

    // Encrypt the message using your cipher module
    const encrypted = crypt.encrypt(message);
    res.json(encrypted); // Send the encrypted message back as JSON
});
app.post('/decrypt', (req, res) => {
    const { encryptedData, iv } = req.body;
    const decrypted = crypt.decrypt(encryptedData, iv);
    res.json(decrypted);
});
app.post('/hash', (req, res) => {
    const { message } = req.body;
    const hashed = crypt.hmac(message); // Use your hashing function
    res.json({ hash: hashed });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});

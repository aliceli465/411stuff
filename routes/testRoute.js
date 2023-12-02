// routes.js
const express = require('express');
const router = express.Router();

router.post('/test-route', (req, res) => {
    const email = req.body.email; // Extract email from the request body
    res.send(`Received email: ${email}`);
});

module.exports = router;

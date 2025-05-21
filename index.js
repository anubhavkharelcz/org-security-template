const crypto = require('crypto');
const express = require('express');
const app = express();

// Weak cryptographic key (intentional security issue)
const weakKey = '1234567890';

// Hardcoded credentials (intentional security issue)
const dbPassword = 'admin123';

app.get('/', (req, res) => {
  // Potential XSS vulnerability (intentional security issue)
  res.send(req.query.userInput);
});

// Using deprecated crypto method (intentional security issue)
const hash = crypto.createHash('md5');

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
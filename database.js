const mysql = require('mysql');
const jwt = require('jsonwebtoken');

// Hardcoded credentials (security issue)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123!',
  database: 'test_db'
});

// Weak JWT secret (security issue)
const jwtSecret = "mysecret123";

// SQL Injection vulnerability (security issue)
function getUserById(userId) {
  const query = `SELECT * FROM users WHERE id = ${userId}`; // Unsafe concatenation
  return connection.query(query);
}

// Insecure cookie settings (security issue)
function setUserCookie(res, userData) {
  const token = jwt.sign(userData, jwtSecret);
  res.cookie('auth', token, {
    httpOnly: false,
    secure: false
  });
}

module.exports = {
  getUserById,
  setUserCookie
};
const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const path = require('path');

// PostgreSQL Pool
const pool = new Pool({
  user: 'tom',
  host: 'localhost',
  database: 'test',
  password: '123258456789',
  port: 5432,
});

// Route to serve the HTML page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/view-users.html'));
});

// Route to fetch all users as JSON
router.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows); // Send the users as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users');
  }
});

module.exports = router;
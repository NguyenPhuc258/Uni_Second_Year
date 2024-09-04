const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const path = require('path');

// Serve the add-user HTML page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/add-user.html'));
});

// PostgreSQL Pool
const pool = new Pool({
  user: 'tom',
  host: 'localhost',
  database: 'test',
  password: '123258456789',
  port: 5432,
});

// Route to add a user
router.post('/', async (req, res) => {
  const { firstname, lastname, location } = req.body;
  try {
    await pool.query('INSERT INTO users (firstname, lastname, location) VALUES ($1, $2, $3)', [firstname, lastname, location]);
    res.send(`
      <html>
      <head><title>Success</title></head>
      <body>
        <script>
          alert('User ${firstname} ${lastname} added successfully');
          window.location.href = '/view-users';
        </script>
      </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send(`
      <html>
      <head><title>Error</title></head>
      <body>
        <script>
          alert('Error adding user');
          window.location.href = '/view-users';
        </script>
      </body>
      </html>
    `);
  }
});

module.exports = router;
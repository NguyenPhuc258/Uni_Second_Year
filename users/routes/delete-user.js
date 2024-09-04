const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const path = require('path');

// Serve the delete-user HTML page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/delete-user.html'));
});

// PostgreSQL Pool
const pool = new Pool({
  user: 'tom',
  host: 'localhost',
  database: 'test',
  password: '123258456789',
  port: 5432,
});

// Route to delete a user
router.post('/', async (req, res) => {
  const { id } = req.body;
  try {
    // Retrieve the user details before deletion
    const result = await pool.query('SELECT firstname, lastname FROM users WHERE id = $1', [id]);
    const user = result.rows[0];

    if (user) {
      await pool.query('DELETE FROM users WHERE id = $1', [id]);
      res.send(`
        <html>
        <head><title>Success</title></head>
        <body>
          <script>
            alert('User ${user.firstname} ${user.lastname} deleted successfully');
            window.location.href = '/view-users';
          </script>
        </body>
        </html>
      `);
    } else {
      res.status(404).send(`
        <html>
        <head><title>Not Found</title></head>
        <body>
          <script>
            alert('User not found');
            window.location.href = '/view-users';
          </script>
        </body>
        </html>
      `);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(`
      <html>
      <head><title>Error</title></head>
      <body>
        <script>
          alert('Error deleting user');
          window.location.href = '/view-users';
        </script>
      </body>
      </html>
    `);
  }
});

module.exports = router;
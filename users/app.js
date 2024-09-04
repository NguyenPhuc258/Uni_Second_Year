const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serves static files like HTML, CSS

// Routes
const addUserRoute = require('./routes/add-user');
const deleteUserRoute = require('./routes/delete-user');
const viewUsersRoute = require('./routes/view'); // Make sure this is the correct path

app.use('/add-user', addUserRoute);
app.use('/delete-user', deleteUserRoute);
app.use('/view-users', viewUsersRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
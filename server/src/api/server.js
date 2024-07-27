const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors")
require('dotenv').config()

//middleware
const app = express();
const port = process.env.PORT;
const clientURL = process.env.CLIENT_URL;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Other middleware and route setups...
app.use('/api/auth', authRoutes);

module.exports = app;
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// Purpose: Entry point for the backend server.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();





// Express server
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000; //server port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); //server running message

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


  

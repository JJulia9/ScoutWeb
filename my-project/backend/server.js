// Purpose: Entry point for the backend server.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Cub = require('./model/Cub');
const Helper = require('./model/Helper');
const Leader = require('./model/Leader');





// Express server
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000; //server port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); //server running message

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI,{ 
   useNewUrlParser: true, 
   useUnifiedTopology: true,
 })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));








//   register a helper
app.post('/api/register', async (req, res) => {
    try {
        const { email, password, firstName, lastName, dob } = req.body;

         // Check if the user already exists
      const existingHelper = await Helper.findOne({ email });
      if (existingHelper) {
        return res.status(400).json({ error: 'Helper already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new helper
        const helper = new Helper({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            dob
        });
        // Save the helper
        await helper.save();
        // Send a success message
        res.status(201).send('Helper registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



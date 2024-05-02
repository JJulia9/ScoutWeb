// Purpose: Entry point for the backend server.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('./model/User');









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
        const { email, password, firstName, lastName, dob, role } = req.body;

         // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Helper already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new helper
        const user = new User({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            dob,
            role: 'Helper', //assign a role
        });

        // Save the helper
        await user.save();
        // Send a success message
        res.status(201).send('Helper registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});





//login for a user

const JWT_SECRET = 'your_jwt_secret_key'; // JWT secret key

 
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  //if user exist
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

   // Validate password
   const validPassword = await bcrypt.compare(password, user.password);
   if (!validPassword) {
     return res.status(400).json({ error: 'Invalid credentials' });
   }
 
  // Generate JWT
  const token = jwt.sign(
    { email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
 
   res.json({ token }); // Return token 
 });



      
      
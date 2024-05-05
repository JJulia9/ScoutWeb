const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('./model/User');





const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


app.get('/api/users', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
      const user = await User.findById(decoded.userId)
        // .populate('kids')
        // .populate('department_id')
        // .populate('doctor_id');


      // The decoded.userId should match the structure used in jwt.sign during login

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Return data only for the authenticated user
    // Inside the /api/users route
            const formattedUser = {
                _id: user._id,
                email: user.email,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
                dob: user.dob,
                parentName: user.parentName,
                parentEmail: user.parentEmail,
                parentPhone: user.parentPhone,
                address: user.address,
                photo: user.photo,
                allergies: user.allergies,
                phone: user.phone,
                training: user.training,
                disclosureScot: user.disclosureScot,
                avaibility: user.avaibility,


  
  
  // Add any additional fields you want to include
};



res.json(formattedUser);

    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// patient login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid patient email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid patient email or password' });
    }

    

    // Include is_admin in the token payload
    const tokenPayload = {
      userId: user._id,
      role: user.role,
    };

    
    const token = jwt.sign(tokenPayload, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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



//fetch helpers
// Endpoint to fetch users with a specific role
app.get('/api/users/role/helper', async (req, res) => {
  const { role } = req.params;

  try {
    const users = await User.find({ role: 'Helper'}); // Fetch users with the given role
    res.json(users); // Return the list of users
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

        
        


  
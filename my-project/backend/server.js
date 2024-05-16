const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const multer = require('multer');
const User = require('./model/User');
const Post = require('./model/Posts');
const Event = require('./model/Events');






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

                post_id: user.post_id ? {
                    title: user.post_id.title,
                    about: user.post_id.about,
                    picture: user.post_id.picture,
                } : null,
                
  
  //  any additional fields to include
};



res.json(formattedUser);

    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//  login
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



//fetch cubs
app.get('/api/users/role/cub', async (req, res) => {
  const { role } = req.params;

  try {
    const users = await User.find({ role: 'Cub'}); // Fetch users with the given role
    res.json(users); // Return the list of users
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






// Serve the uploads folder as static files
app.use("/uploads", express.static("uploads"));
        
//fetch posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//format for the post's pictures
const path = require("path"); // Needed to handle file extensions

// Custom storage configuration for Multer
const storage = multer.diskStorage({
  // Specify the destination folder
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure "uploads" folder exists
  },
  // Set the filename to the original with a unique prefix (like timestamp) to avoid collisions
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname); // Extract the file extension
    const baseName = path.basename(file.originalname, extension); // Get the base filename without extension

    // Combine base filename with unique suffix and original extension
    const newFilename = `${baseName}-${uniqueSuffix}${extension}`;
    cb(null, newFilename);
  },
});

const upload = multer({ storage }); // Use the custom storage





// const upload = multer({ dest: "uploads/" }); // Specify a directory to store uploaded files


//add a post 
app.post("/api/posts", upload.single("picture"), async (req, res) => { // Using multer to handle file uploads
  try {
    const { title, about } = req.body;
    const picture = req.file?.filename; // The filename of the uploaded picture

    const post = new Post({
      // user_id: req.user._id,
      title,
      about,
      picture,
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




//helpers avaible days posting to database from submit form
app.post('/user/:id/avaibility', async (req, res) => {
  const { id } = req.params;
  const { date } = req.body;

  if (!date) {
    return res.status(400).send({ error: 'Date is required' });
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    user.avaibility.push({ date });
    await user.save();

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});






//get all avaible days for a helper
// Assuming you have a User model with an availability field
app.get('/api/avaibility/all', async (req, res) => {
  try {
    const allUsers = await User.find({}, ' firstName lastName avaibility'); // Get availability for all users

    const allAvaibility = allUsers.flatMap((user) =>
      user.avaibility.map((entry) => ({
        userId: user._id,
        firstName: user.firstName, // Include the first name
        lastName: user.lastName,   // Include the last name
        date: entry.date,
        email: user.email,
      }))
    );

    res.json(allAvaibility);
    
  } catch (error) {
    console.error('Error fetching availability:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



//fetch all events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

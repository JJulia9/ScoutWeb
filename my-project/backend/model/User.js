const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,

  //cub info
  firstName: String,
  lastName: String,
  dob: Date,
  parentName: String,
  parentEmail: String,
  parentPhone: String,
  address: String, 
  photo: String,
  allergies: String,
//   badges:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],

//   helper info
// firstName: String,
// lastName: String,
// dob: Date,
// photo: String,
    phone: String,
    // address: String,
    training: Array,
    disclosureScot: Boolean,
    avaibility: Array, // Ensure correct sub-schema

//   leader info
// email: String,
// password: String,
// photo: String,

//post user id adding
// posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],


});

const User = mongoose.model('User', userSchema);

module.exports = User;
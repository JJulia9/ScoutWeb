const mongoose = require('mongoose');

//one schema for all users

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

//   helper info
    phone: String,
    training: Array,
    disclosureScot: Boolean,
    avaibility: Array, 

//   leader info
// email: String,
// password: String,
// photo: String,


});

const User = mongoose.model('User', userSchema);

module.exports = User;
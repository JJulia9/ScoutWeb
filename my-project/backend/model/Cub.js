const mongoose = require('mongoose');


const cubsSchema = new mongoose.Schema({
  email: String,
  password: String,

  firstName: String,
  lastName: String,
  dob: Date,
  parentName: String,
  parentEmail: String,
  parentPhone: String,
  address: String, 
  photo: String,
  allergies: String,
  badges:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],

});

module.exports = mongoose.model('Cubs', cubsSchema);

module.exports = Cubs;
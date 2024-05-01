const mongoose = require('mongoose');


const cubSchema = new mongoose.Schema({
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
//   badges:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],

});

const Cub = mongoose.model('Cub', cubSchema);

module.exports = Cub;
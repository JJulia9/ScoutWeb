const mongoose = require('mongoose');

const helpersShema = new mongoose.Schema({
    email: String,
    password: String,
    
    firstName: String,
    lastName: String,
    dob: Date,
    photo: String,
    phone: String,
    address: String,
    role: String,
    training: Array,
    disclosureScot: Boolean,
    avaibility: Array,
    
    
    });

module.exports = mongoose.model('Helpers', helpersShema);

module.exports = Helpers;
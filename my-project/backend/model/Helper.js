const mongoose = require('mongoose');

const helperShema = new mongoose.Schema({
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

const Helper = mongoose.model('Helper', helperShema);
module.exports = Helper;
;
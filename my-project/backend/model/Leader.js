const mongoose = require('mongoose');

const leadersSchema = new mongoose.Schema({
    email: String,
    password: String,
    photo: String,
   
    });

module.exports = mongoose.model('Leaders', leadersSchema);

module.exports = Leaders;
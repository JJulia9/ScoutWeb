const mongoose = require('mongoose');

const leaderSchema = new mongoose.Schema({
    email: String,
    password: String,
    photo: String,
   
    });

const Leader = mongoose.model('Leader', leaderSchema);
module.exports = Leader;
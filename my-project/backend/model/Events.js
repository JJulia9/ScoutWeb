const mongoose = require('mongoose');
//shema to store events
const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date
    });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;



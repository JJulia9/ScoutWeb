const mongoose = require('mongoose');

//shema to store posts
const postSchema = new mongoose.Schema({
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    about: String,
    picture: String,
    });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
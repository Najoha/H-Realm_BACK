const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const postSchema = mongoose.Schema({
    titre: { 
        type: String, 
        required: true 
    },
    contenu: { 
        type: String, 
        required: true
    },
    owner: { 
        type: String, 
        required: true 
    },
    likes: { 
        type: Number
    },
    genre: { 
        type: String, 
        required: true 
    }
}, {collection: "posts", timestamps: true});

// postSchema.plugin(uniqueValidator);

const Post = mongoose.model('posts', postSchema);
module.exports = { Post }
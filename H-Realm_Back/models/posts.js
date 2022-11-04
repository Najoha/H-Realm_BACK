const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const postSchema = mongoose.Schema({
    // id: { 
    //     type: String, 
    //     required: true, 
    //     unique: true 
    // },
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
    likes : { 
        type: Number
    }
}, {collection: "posts", timestamps: true});

// postSchema.plugin(uniqueValidator);

const Post = mongoose.model('posts', postSchema);
module.exports = { Post }
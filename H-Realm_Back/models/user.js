const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    id: {
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    nom : {
        type : String,
        required : true
    },
    prenom : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    bio : {
        type : String,
        required : true
    },
    token: {
        type : String
    }
}, {collection: "users", timestamps: true});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);
module.exports = { User }
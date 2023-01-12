const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: {
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
    photo : {
        type : String
    },
    age : {
        type : Number
    },
    bio : {
        type : String
    },
    role : {
        type : String
    },
    token: {
        type : String
    }
}, {collection: "users", timestamps: true});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);
module.exports = { User }
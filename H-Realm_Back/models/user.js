import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema({
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
        type : Number
    },
    bio : {
        type : String
    }
}, {collection: "users", timestamps: true});

userSchema.plugin(uniqueValidator);

export const User = mongoose.model('users', userSchema);

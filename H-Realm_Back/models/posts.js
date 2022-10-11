import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const postSchema = mongoose.Schema({
    titre: {type: String, required: true },
    contenu: { type: String, required: true},
    owner: { type: String, required: true },
    likes : { type: Number}
}, {collection: "posts", timestamps: true});

postSchema.plugin(uniqueValidator);

const Post = mongoose.model('Posts', postSchema);
export default {Post}
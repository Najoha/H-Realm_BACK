import mongoose from "mongoose"
const postSchema = mongoose.Schema(
  {
    titre: { type: String, required: true },
    contenu: { type: String, required: true },
    owner: { type: String, required: true },
    likes: { type: Number },
  },
  { collection: "posts", timestamps: true }
);




export const Post = mongoose.model("posts", postSchema);


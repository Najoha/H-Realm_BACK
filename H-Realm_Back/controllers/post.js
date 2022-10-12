import {Post} from "../models/posts.js";

export const createPubli = async (req, res, next) => {
  try {
    const newPost = req.body;
    const post = Post.create(newPost)
    return res.send("Votre publication à été crée avec succès") 
  } catch (error) {
    console.error(error)
    throw error
  }
};

export const getPubli = async (req,res,next)=>{
  const posts = await Post.find();
  return res.send(posts);
}

export const getPubliByOwner = async (req,res,next)=>{
  const owner = req.params.owner;
  const posts = await Post.find({owner: owner});
  return res.send(posts);
}
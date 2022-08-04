const { find } = require("../models/posts");
const { Post } = require("../models/posts");

exports.createPubli = async (req, res, next) => {
  try {
    const newPost = req.body;
    const post = Post.create(newPost)
    return res.send(post) 
  } catch (error) {
    console.error(error)
    throw error
  }
};

exports.getPubli = async (req,res,next)=>{
  const posts = await Post.find();
  return res.send(posts);
}

exports.getPubliByOwner = async (req,res,next)=>{
  const owner = req.params.owner;
  const posts = await Post.find({owner: owner});
  return res.send(posts);
}
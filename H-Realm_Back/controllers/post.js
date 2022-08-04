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
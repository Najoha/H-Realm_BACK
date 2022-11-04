const { find } = require("../models/posts");
const { Post } = require("../models/posts");

exports.createPubli = async (req, res, next) => {

  try {

    const { id, titre, contenu, owner, genre} = req.body;

    if (!(titre && contenu && owner && genre)) {
      res.status(400).send('All input are required');
    }

    const post = await Post.create({
      id,
      titre,
      contenu,
      owner,
      genre
    });

    res.status(200).send(post);

  } 
  catch (error) {
    console.log(error);
  }
}

exports.getPubli = async (req,res,next)=>{
  const posts = await Post.find();
  return res.send(posts);
}

exports.getPubliById = async (req,res,next)=>{
  const id = req.params.id;
  const posts = await Post.find({id: id});
  return res.send(posts);
}

exports.getPubliByOwner = async (req,res,next)=>{
  const owner = req.params.owner;
  const posts = await Post.find({owner: owner});
  return res.send(posts);
}

exports.getPubliByGenre = async (req, res, next) => {
  const genre = req.params.genre;
  const posts = await Post.find({genre: genre});
  return res.send(posts);
}

exports.updatePubli = async (req, res, next) => {
  try {
    const { titre, contenu, owner, genre} = req.body;

    if (!(titre && contenu && owner && genre)) {
      res.status(400).send('All input are required');
    }

    const post = await Post.updateOne({
      titre,
      contenu,
      owner,
      genre
    });

    res.status(200).send(post);

  } 
  catch (error) {
    console.log(error);
  }
}

exports.deletePubli = async (req, res, next) => {
  const id = req.params.id;
  const posts = await Post.deleteOne({id: id});
  return res.send(posts);
}
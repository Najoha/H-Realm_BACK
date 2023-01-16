const { default: mongoose } = require("mongoose");
const { find } = require("../models/posts");
const { Post } = require("../models/posts");

exports.createPubli = async (req, res, next) => {

  try {

    const {titre, contenu, owner, genre,select} = req.body;
    if (!(titre && contenu && genre && owner)) {
      res.status(400).send('All input are required');
    }
    
    console.log(titre )
    const post = await Post.create({
      titre,
      contenu,
      genre,
      owner,
      select
    });

    res.status(200).send(post);

  } 
  catch (error) {
    console.log(error);
  }
}

exports.getPubli = async (req,res,next)=>{  
  try {
    const query = req.query
    console.log(req.user)
    const posts = await Post.find(query);
    return res.send(posts);
  } catch (error) {
    console.error(error);
    next(error)
  }
}

exports.getSelection = async (req,res,next)=>{  
  try {
    const posts = await Post.find({select: "oui"});
    return res.send(posts);
  } catch (error) {
    console.error(error);
    next(error)
  }
}

exports.updatePubli = async (req, res) => {
  try {
    const query = req.query

    const { titre, contenu, owner, genre} = req.body;

    if (!(titre && contenu && owner && genre)) {
      res.status(400).send('All input are required');
    }

    const post = await Post.findOneAndUpdate(query,{
      titre,
      contenu,
      genre,
      owner
    });

    res.status(200).send(post);

  } 
  catch (error) {
    console.log(error);
  }
}

exports.updateOwner = async (req, res) => {
  try {
    const query = req.query

    const {owner} = req.body;

   
    const post = await Post.updateMany(query,{
      owner
    });

    res.status(200).send(post);

  } 
  catch (error) {
    console.log(error);
  }
}

exports.deletePubli = async (req, res, next) => {
  try {
    const query = req.query
    console.log(req.user)
    const posts = await Post.deleteOne(query);
    return res.send(posts);
  } catch (error) {
    console.error(error);
    next(error)
  }
}

exports.Selected = async (req,res,next)=>{  
  try {
    const query = req.query

    const {select} = req.body;

    const post = await Post.findOneAndUpdate(query,{
      select
    });
    console.log(req.body);
    res.status(200).send(post);

  } 
  catch (error) {
    console.log(req.body);
    console.log(error);
  }
}

exports.Remove = async (req,res,next)=>{  
  try {
    const query = req.query

    const {select} = req.body;

    const post = await Post.findOneAndUpdate(query,{
      select
    });

    res.status(200).send(post);

  } 
  catch (error) {
    console.log(error);
  }
}

// exports.updateOwner = async (req, res, next) => {
//   try {
//     const {owner} = req.body;

   

//     const post = await Post.updateMany({
//       owner
//     });

//     res.status(200).send(post);

//   } 
//   catch (error) {
//     console.log(error);
//   }
// }


const { Post } = require("../models/posts");

const createPubli = async (req, res, next) => {
  try {
    const newPost = req.body;
    const post = Post.create(newPost)
    return res.send(post) 
  } catch (error) {
    console.error(error)
    throw error
  }
};

const getPubli = async (req,res,next)=>{
  const posts = await Post.find();
  return res.send(posts);
}

const getPubliByOwner = async (req,res,next)=>{
  const owner = req.params.owner;
  const posts = await Post.find({owner: owner});
  return res.send(posts);
}

router.get("/", createPubli);
router.get("/publication/:owner", getPubliByOwner);
router.post("/publications", getPubli);

module.exports = router;
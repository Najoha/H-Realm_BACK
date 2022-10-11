import express from "express";
const router = express.Router();
import { getPubli, getPubliByOwner, createPubli } from '../controllers/post.js';

router.get("/", getPubli);
router.get("/publication/:owner", getPubliByOwner);
router.post("/add", createPubli);

export default router;
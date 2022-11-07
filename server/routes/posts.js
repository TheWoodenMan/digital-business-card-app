const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - since linked from server.js treat as path as
//post/:id, post/createPost, post/likePost/:id, post/deletePost/:id

router.get("/:id", ensureAuth, postsController.getPost);

// enables user to create a post with cloudinary for media uploads
router.post("/createPost", upload.single("file"), postsController.createPost);

// enables user to like posts, in controller uses POST model to
router.put("/likePost/:id", postsController.likePost);

// enables user to delete posts, in controller uses DELETE model
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;

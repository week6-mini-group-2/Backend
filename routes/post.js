const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const PostsController = require('../controllers/post.controller');
const postsController = new PostsController;

router.post('/',authMiddleware,postsController.createPost);
// router.get('/',authMiddleware,postsController.getAllPost);
// router.get('/:userId',authMiddleware,postsController.getPost);
// router.put('/',authMiddleware,postsController.updatePost);
// router.delete('/',authMiddleware,postsController.deletePost);

module.exports = router;
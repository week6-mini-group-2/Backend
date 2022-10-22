const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const PostsController = require('../controllers/post.controller');
const postsController = new PostsController;

//게시글 저장
router.post('/',authMiddleware,postsController.createPost);

//모든 게시글 조회
router.get('/',postsController.getAllPost);
//상세페이지
router.get('/:postid',authMiddleware,postsController.getDetailPost);
//게시글 수정
router.put('/:postid',authMiddleware,postsController.updatePost);
//삭제
router.delete('/:postid',authMiddleware,postsController.deletePost);
module.exports = router;


const express = require('express');
const router = express.Router();

const commentsRouter = require('./comment.js');
const postsRouter = require('./post.js');
const userRouter = require('./user.js');
const categoryRouter = require('./category.js');

router.use("/comments", commentsRouter);
router.use("/posts", postsRouter);
router.use("/users", userRouter);
router.use("/categories", categoryRouter);

module.exports = router; 
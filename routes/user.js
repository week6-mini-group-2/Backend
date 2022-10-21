const express = require('express');
const router = express.Router();
const isLoginMiddleware = require('../middlewares/isLoginMiddleware');

const UsersController = require('../controllers/user.controller');
const usersController = new UsersController;

// 회원가입
// 로그인

router.post('/signup',usersController.userSignup);
router.post('/login',isLoginMiddleware,usersController.userLogin);
router.get('/logout',usersController.userLogout);

router.get('/userInfo',usersController.getUserInfo);
router.get('/userInfo/:userId',usersController.getUserInfoById);

module.exports = router;
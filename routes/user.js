const express = require('express');
const router = express.Router();
const isLoginMiddleware = require('../middlewares/isLoginMiddleware');

const UsersController = require('../controllers/user.controller');
const usersController = new UsersController;

router.post('/signup',isLoginMiddleware.isLogout,usersController.userSignup);
router.post('/login',isLoginMiddleware.isLogout,usersController.userLogin);
router.get('/logout',isLoginMiddleware.isLogin,usersController.userLogout);

router.get('/userInfo',usersController.getUserInfo);
router.get('/userInfo/:userId',usersController.getUserInfoById);
router.post('/admin/:userId', usersController.giveAuthority);

module.exports = router;
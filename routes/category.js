const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const CategoryController = require('../controllers/category.controller');
const categoryController = new CategoryController;

// todo 만들기
router.post('/', authMiddleware, categoryController.createcategory);
// todo 삭제
router.delete('/', authMiddleware, categoryController.deletecategory);
// todo 클리어
router.put('/', authMiddleware, categoryController.clearcategory);

module.exports = router;
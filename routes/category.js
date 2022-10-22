const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const CategoriesController = require('../controllers/category.controller');
const categoriesController = new CategoriesController;

router.post('/', categoriesController.createCategory);
router.put('/:categoryId', categoriesController.updateCategory);
router.delete('/:categoryId', categoriesController.deleteCategory);
router.get('/', categoriesController.getCategory);

module.exports = router;
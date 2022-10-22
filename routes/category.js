const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares/isAdmin');

const CategoriesController = require('../controllers/category.controller');
const categoriesController = new CategoriesController;

router.post('/',isAdmin, categoriesController.createCategory);
router.put('/:categoryId',isAdmin, categoriesController.updateCategory);
router.delete('/:categoryId',isAdmin, categoriesController.deleteCategory);
router.get('/', categoriesController.getCategory);

module.exports = router;
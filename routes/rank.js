const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const RanksController = require('../controllers/rank.controller');
const ranksController = new RanksController();

router.post('/:categoryId',authMiddleware,ranksController.createRankAndScore);

router.put('/:categoryId',authMiddleware,ranksController.updateScore);

router.get('/user/:categoryId',authMiddleware,ranksController.getUsersRankAndScore);

router.get('/category/:categoryId',authMiddleware,ranksController.getRanksByCategory);

router.delete('/:rankId',authMiddleware,ranksController.deleteRankAndScore);

module.exports = router;

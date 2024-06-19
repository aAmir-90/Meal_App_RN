const express = require('express');
const {getMeals, addMeals} = require('../controllers/meals.controllers')
const router = express.Router();


router.get('/get-meals', getMeals);
router.post('/add-meals', addMeals)

module.exports = router;
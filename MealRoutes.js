const express = require('express');
const router = express.Router();
const {    
    getAllMeals, 
    createMeal, 
    deleteMeal, 
    editMeal 
} = require('./MealController');

router.route('/').get(getAllMeals).post(createMeal);
router.route('/:id').delete(deleteMeal).patch(editMeal);

module.exports = router;

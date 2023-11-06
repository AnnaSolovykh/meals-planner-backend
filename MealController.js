const Meal = require('./MealModel');

const getAllMeals = async (req, res) => {
    try {
        const meals = await Meal.find({});
        res.status(200).json({ meals });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const createMeal = async (req, res) => {
    try {
        const meal = await Meal.create(req.body)
        res.status(201).json({ meal })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const deleteMeal = async (req, res) => {
    try {
        const { id: mealId } = req.params;
        const meal = await Meal.findOneAndDelete({ _id: mealId });
        res.status(200).json({ meal });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const editMeal = async (req, res) => {
    try {
        const { id: mealId }  = req.params;
        const meal = await Meal.findOneAndUpdate({ _id: mealId }, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({ meal })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = {
    getAllMeals,
    createMeal,
    deleteMeal,
    editMeal
}
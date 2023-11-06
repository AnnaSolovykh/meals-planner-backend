const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, 'name must be provided'],
        trim: true,
        maxlength: [20, 'the name of the meal should not be longer than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Meal', mealSchema)
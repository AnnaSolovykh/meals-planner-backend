const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: {
        type: String, //названия меню буду в текстовой форме
        required: true, //нужен валидатор required, что  поле было задано перед сохранением, чтобы данные из поля были сохранены
    }
})

module.exports = mongoose.model('Meal', mealSchema)
//first name is the unique name for the collection, the second one is the schema name)
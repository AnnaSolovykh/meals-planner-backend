const MealModel = require('./MealModel');
//соединяем, потому модель и контроллер должны общаться друг с другом, чтобы иметь доступ к тому,что пишем

//get

module.exports.getMeal = async(req, res) => {//получаем рецепты
    const myMeal = await MealModel.find();//в моделе будем искать рецепт 
    res.send(myMeal)
}

//post
module.exports.saveMeals = async (req, res) => {//и можем их сохранять
    const { title } = req.body;
    MealModel.create( {title} )
    .then ((data) => {
        console.log('Meal added')
        res.send(data)
    })
}

//delete
module.exports.deleteMeal = async (req, res) => {
    const { _id } = req.body;
    MealModel.findByIdAndDelete(_id)
    .then (()=> res.send('Deleted a meal'))
}

//edit
module.exports.editMeal = async (req, res) => {
    const { _id, title } = req.body;
    MealModel.findByIdAndUpdate( _id, {title}) 
    .then (()=> res.send('Edited a meal'))
}
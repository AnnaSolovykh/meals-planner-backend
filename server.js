const express = require('express');
const app = express();
const routes = require('./MealRoutes')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

mongoose.set('strictQuery', false)

const PORT = process.env.PORT || 4000; //чтобы иметь доступ также к базе данных

app.use(express.json()); 
app.use(cors()); //чтобы не блокировали запросы через postman
app.use('/api/v1/meals', routes);

const start = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_LINK);
        app.listen(PORT, console.log(`Server is listening on ${PORT}`));
    } catch (error) {
        console.log(error)
    }
};

start();

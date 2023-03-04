const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes')
const cors = require('cors');

require('dotenv').config();

mongoose.set('strictQuery', false)

const PORT = 4000 || process.env.port; //чтобы иметь доступ также к базе данных

app.use(express.json()); 
app.use(cors()); //чтобы не блокировали запросы через postman

mongoose
.connect(process.env.MONGODB_LINK)
.then( () => console.log('We were connected to mongo') )
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log( `I AM LISTENING ON PORT${PORT}` )
})

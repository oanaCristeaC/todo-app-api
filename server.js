
//https://expressjs.com/en/4x/api.html#router
const express = require ("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


//const urlMongo = 'mongodb://localhost/todoApp'
const uri = process.env.DB.replace('<PASSWORD>', process.env.PASSWORD)
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.connect('mongodb://localhost/todos');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to db")
});

//handle incoming requests
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json()) 

app.listen(port, () => {
    console.log("Server running on port", port)
})

app.get("/", (req, res, next) => {
    res.json({test: "some random text"})
})

const routes = require('./api/routes/todoRoutes')
routes(app)

//handle unset rotes
app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

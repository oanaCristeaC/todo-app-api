const express = require ("express");
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require('dotenv').config();
const port = process.env.PORT || 3000;


const uri = process.env.DB.replace('<PASSWORD>', process.env.PASSWORD)
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to db")
});

//handle incoming requests
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())


app.use('/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
    console.log("Server running on port", port)
})

/** Redirect to the api interface */
app.get("/", (req, res, next) => {
    return res.redirect('/v1');
})


const routes = require('./api/routes/todoRoutes')
routes(app)

/** Handle unset routes */
app.use((req, res) => {
    res.status(404).redirect('/v1') //.send({url: req.originalUrl + ' not found'})
});


const express = require ("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:2701/todoApp")

//handle incoming requests
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json()) 

//handle unset rotes
app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + 'not found'})
});


app.listen(port, () => {
    console.log("Server running on port", port)
})

app.get("/", (req, res, next) => {
    res.json({test: "some random text"})
})
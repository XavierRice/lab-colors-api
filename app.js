//DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const colorsController = require('./controllers/colorsController.js')

//Middlewear
app.use(cors()) //prevents cross orgin failures. 
app.use(express.json()) //we accept json data. Changes the data which is in json string form?
app.use('/colors', colorsController)  // creating a route /colors 

//ROUTES
app.get('/', (req, res) => {     // makes a request to the end point and gets the data. part of the CRUDE methond
    res.send('Welcome to Colors!')
});

//404 Page
app.get('*', (req, res) => {
    res.status(404).send("Page not found")
});


module.exports = app;
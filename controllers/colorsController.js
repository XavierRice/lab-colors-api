const express = require('express');
const colors = express.Router();


//GET ALL COLORS
colors.get('/', (req, res) => {
    res.json({status:'welcome to the colors db'})
});






module.exports = colors; 
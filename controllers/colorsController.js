const express = require('express');
const colors = express.Router();





//GET ALL COLORS
colors.get('/', (req, res) => {
    res.json({status:'ok'})
});






module.exports = colors; 
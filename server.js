const app = require('./app');

require("dotenv").config() // Gives us acces to our dotenv var;
const PORT = process.env.PORT;




//LISTENER
app.listen(PORT, ()=>{
    console.log(`I am Listening on PORT ${PORT}`)
})
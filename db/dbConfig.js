const pgp = require('pg-promise')();
require("dotenv").config();

const cn = {                              // Our connection object
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
  };
  
 //connects the color_dev db 
const db = pgp(cn)

db.connect()
  .then((cn) => {
    const { user, host, port, database } = cn.client;
    console.log(
      "\x1b[90m" +
        `Postgres connection established with user:${user}, host:${host}, port:${port}, database:${database}` +
        "\x1b[0m"
    );
    cn.done();
  })
  .catch((error) => console.log("database connection error", error));

  
module.exports = db;
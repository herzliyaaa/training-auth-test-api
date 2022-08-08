require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.PG_USER,
    host:process.env.PG_HOST,
    database: process.env.PG_DATABASE, 
    password:process.env.PG_USERPASS,
    port:'5432' //default port
});

module.exports = pool;
require("dotenv").config();
const Pool = require("pg").Pool;

let dbName;

if (process.env.NODE_ENV === "production") {
  dbName = process.env.PG_PROD_DB;
}

if (process.env.NODE_ENV === "development") {
  dbName = process.env.PG_DEV_DB;
}

if (process.env.NODE_ENV === "test") {
  dbName = process.env.PG_TEST_DB;
}

let pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: dbName,
  password: process.env.PG_USERPASS,
  port: "5432", //default port
});

module.exports = pool;

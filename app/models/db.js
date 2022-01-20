const { Client } = require('pg');

const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const client = new Client({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT
});

client.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
})

// DB Migration
client.query("CREATE TABLE IF NOT EXISTS score (	name VARCHAR(200) NULL DEFAULT NULL, difficulty VARCHAR(200) NULL DEFAULT NULL,	timespent VARCHAR(200) NULL DEFAULT NULL, created TIMESTAMP NULL DEFAULT NULL)");

module.exports = client;

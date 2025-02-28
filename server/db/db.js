const mysql = require('mysql2')
require('dotenv').config()

const conn = mysql.createPool({
    host : process.env.DOMAIN ,
    user : process.env.NAME, 
    password : process.env.PASSWORD ,
    database : process.env.DB_NAME ,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
console.log();

module.exports = conn.promise()

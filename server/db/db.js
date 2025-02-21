const mysql=require('mysql2')
require('dotenv').config()

const conn= mysql.createPool({
    host: process.env.DOMAIN ,
    user : process.env.USERNAME ,
    password : process.env.PASSWORD ,

})

//promise is for if conn established then export otherwise not
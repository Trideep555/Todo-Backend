const express = require('express')    // import
require('dotenv').config()
const cors=require('cors');
const bodyParser = require('body-parser')
const cookie_parser = require('cookie-parser') 
const app = express() // server initialization
const port = process.env.PORT;


app.use(cors()); // localhost:4000  
app.use(cookie_parser()) 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use("/todo",require('./routes/todo.routes'))
app.use("/college",require('./routes/college.routes'))
app.use("/gallery",require("./routes/gallery.routes"))
// 3 layer -- client -- server -- database

app.listen(port, ()=>{
    console.log("listening on port"+port);
})
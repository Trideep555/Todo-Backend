const express = require('express')    // import
const bodyParser = require('body-parser')
const cookie_parser = require('cookie-parser') 
const app = express() // server initialization
const port = 8000


app.use(cookie_parser()) 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/todo",require('./routes/todo.routes'))
app.use("/items",require('./routes/items.routes'))


// 3 layer -- client -- server -- database

app.listen(port, ()=>{
    console.log("listening on port"+port);
})
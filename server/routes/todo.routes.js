const express=require('express')
const router = express.Router()
const todo = require('../controllers/todo.controller')

router.get("/",todo.get)

router.post("/",todo.add)

router.put("/",todo.edit)

router.delete("/",todo.delet)

module.exports=router
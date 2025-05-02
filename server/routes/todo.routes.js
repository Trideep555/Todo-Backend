const express=require('express')
const router = express.Router()
const todo = require('../controllers/todo.controller')

router.get("/",todo.get)

router.post("/",todo.add)

router.put("/:id",todo.edit)

router.delete("/:id",todo.delet)

module.exports=router
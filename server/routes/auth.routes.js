const express = require("express");
const router = express.Router();
const controller = require('../controllers/auth.controller')
const { verifyToken } = require('../middlewares/auth');
router.post("/login",controller.login);
router.get("/doctors",verifyToken,controller.showDoctors);


module.exports = router;

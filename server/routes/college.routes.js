const express = require("express");
const router = express.Router();
const controller = require("../controllers/college.controller");

router.get("/:page?", controller.getColleges);

module.exports = router;

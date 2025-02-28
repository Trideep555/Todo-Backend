const express=require('express')
const router = express.Router()
const college = require('../controllers/college.controllers')

router.get("/",college.GetFirst50CollegeNames);
router.get("/bystate/:state",college.GetCollegeByState);

module.exports = router;
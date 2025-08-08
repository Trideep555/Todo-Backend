const express = require("express");
const router = express.Router();
const controller = require("../controllers/gallery.controller");
const upload = require("../middlewares/multer");

router.get("/:id?", controller.getImage);
router.post("/",upload.single("image") , controller.uploadImage);

module.exports = router;

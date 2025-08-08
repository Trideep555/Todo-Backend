const db = require("../db/db");
const path = require('path');
const getImage = async (req,res) => {
    const id = req.params.id;
    
    try {
        const imagePath = path.join(__dirname , "..", "images", `pic${id}.png`);
        res.sendFile(imagePath)
    } catch (e) {
        console.error(e)
        res.status(500).send("Error")
    }
}

const uploadImage = async (req, res) => {
    console.log(req.file.filename);
    res.json({ msg: "Successfull"})
}
module.exports = { getImage , uploadImage };
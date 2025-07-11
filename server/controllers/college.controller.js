const db = require("../db/db");

const getColleges = async (req, res) => {
    let page = 1; 
    if(req.params.page) {
        page = req.params.page; 
    }
    
    let offset = (page - 1) * 20; 
   

    try {
    const [result] = await db.query(`SELECT * FROM colleges ORDER BY id LIMIT 20 OFFSET ${offset}`);
    const [totalPages] = await db.query(`SELECT COUNT(*)/20 AS Pages FROM colleges`);
    res.status(200).json({result:result , totalPages:Math.ceil(totalPages[0].Pages)});
    }catch(e) {
            console.log(e);
            res.status(500).send("Something went wrong");        
        }
}
 

module.exports = {getColleges};


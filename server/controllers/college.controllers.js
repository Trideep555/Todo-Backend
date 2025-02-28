const conn = require('../db/db')

const GetFirst50CollegeNames =  async (req,res) => {
    try {
        const [result] = await conn.query("Select * From colleges LIMIT 50");
        res.json(result);
    }
    catch(e){
        res.status(500).send("Something went wrong");
    }
}
const GetCollegeByState = async (req,res) => {
    try{
      //const state = req.query['state']; ?state= 
      const state = req.params['state'];
     
      const [result] = await conn.query(`Select * FROM colleges Where state='${state}'`);
      if(result.length == 0){
        res.status(404).json({msg: "No College Found"});
      }
      else
      res.json(result);   
    }
    catch{
        res.status(500).send("Something went wrong");        
    }
}

module.exports = {GetFirst50CollegeNames,GetCollegeByState}
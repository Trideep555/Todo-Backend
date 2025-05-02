const conn = require("../db/db");


const get = async (req,res) => {
    try{
        //const state = req.query['state']; ?state= 
        const state = req.body;

        /* console.log(state);
        res.json(state);
        */
        const [result] = await conn.query(`Select * FROM tasks order by id`);
        res.status(200).json(result);
        /* res.json(result); */   
  }
      catch(e) {
          console.log(e);
          res.status(500).send("Something went wrong");        
      }
}
const add = async (req,res) => {
    try{
          //const state = req.query['state']; ?state= 
          const state = req.body;

          /* console.log(state);
          res.json(state);
          */
          const [result] = await conn.query(`INSERT INTO tasks SET title='${req.body.title}',description='${req.body.description}',due_date='${req.body.due_date}',status='${req.body.status}',created_by='${req.body.created_by}',category_id='${req.body.category_id}'`);
          res.status(200).json({msg:"Data Added Successfully"})
          /* res.json(result); */   
    }
        catch(e) {
            console.log(e);
            res.status(500).send("Something went wrong");        
        }
    }

const edit = async (req,res) => {
    try{
        //const state = req.query['state']; ?state= 
        const state = req.body;
        const id  = req.params.id;
        /* console.log(state);
        res.json(state);
        */
        const [result] = await conn.query(`UPDATE tasks SET title='${req.body.title}',description='${req.body.description}',due_date='${req.body.due_date}',status='${req.body.status}',created_by='${req.body.created_by}',category_id='${req.body.category_id}' where id=${id}`);
        res.status(200).json({msg:"Data Updated Successfully"})
        /* res.json(result); */   
  }
      catch(e) {
          console.log(e);
          res.status(500).send("Something went wrong");        
      }
  }

const delet  = async (req,res) => {
    try{
        const id  = req.params.id;
        /* console.log(state);
        res.json(state);
        */
        const [result] = await conn.query(`DELETE FROM tasks where id=${id}`);
        res.status(200).json({msg:"Data Deleted Successfully"})
        /* res.json(result); */   
  }
      catch(e) {
          console.log(e);
          res.status(500).send("Something went wrong");        
      }
 
}

module.exports = {get,add,edit,delet}
const conn=require('../db/db');
const get = (req,res) => {
    res.send("this is todo get")
}
const add = async (req,res) => {
    try{
        const body=req.body;
        
        const [result] = await conn.query(`INSERT INTO tasks SET title='${body.title}', description='${body.description}',status='${body.status}',due_date='${body.due_date}',created_by='${body.created_by}',category_id='${body.category_id}'`);
        res.status(200).json({msg:"data inserted"});
    }
    catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
}
const edit = async (req,res) => {
    try{
    const body=req.body;
    const id=req.params.id;
        
        const [result] = await conn.query(`UPDATE tasks SET title='${body.title}', description='${body.description}',status='${body.status}',due_date='${body.due_date}',created_by='${body.created_by}',category_id='${body.category_id}' WHERE id=${id}`);
        res.status(200).json({msg:"data updated successfully"});
    }
    catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
}
const delet  = (req,res) => {
    res.send("this is todo delete")
}

module.exports = {get,add,edit,delet}
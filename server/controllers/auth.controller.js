const db = require("../db/db");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const secret_Key = process.env.SECRET_KEY;

const login =  async (req,res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        
        const [user] = await db.query(`Select * From login where username = '${username}' AND password = '${password}'`);

        

        if(user.length == 1){
            const token = jwt.sign({ id : user[0].id , username : user[0].username }, secret_Key , {expiresIn : '1h'});
           return res.status(200).json({msg : 'login successfull', token : token});
        }
        else {
        return res.status(404).json({msg : 'Username or password incorrect'});
            
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send("Something went wrong");        
            
    }
}

const showDoctors = async (req,res) => {
    try {
        console.log(req.user);
        const [doctors] = await db.query(`Select * From login where username='${req.user}'`);
        return res.status(200).json(doctors);
    }catch(e){
        console.log(e);
         res.status(500).send("Something went wrong");
    }
}
module.exports= {login,showDoctors};
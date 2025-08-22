const jwt = require('jsonwebtoken');

require('dotenv').config()

const secret_Key = process.env.SECRET_KEY;


const verifyToken =  (req,res,next)=> {
    if(!req.headers['authorization']){
        return res.status(403).send("A token is required for authentication");
    }
    const token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token , secret_Key , (err,decoded) => {
        if(err){
                    return res.status(403).send("Unauthorized");

        }
        console.log(decoded)
        req.user = decoded.username;
        next()
    })
    
}

module.exports = {verifyToken}
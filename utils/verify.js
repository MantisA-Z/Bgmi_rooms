let userModel = require('../models/user');
let JWT = require('jsonwebtoken');

async function verifyToken(req, res, next){
    try{
        if(req.cookies && req.cookies.token){
            let token = req.cookies.token;
            let userToken = JWT.verify(token, process.env.JWT_SECRET);
            let user = await userModel.findOne({_id: userToken._id, email: userToken.email})
            if(!user){
                res.redirect('/signin');
                next();
            }else{
                next();
            }
        }else{
            console.log('Token verification error')
            res.redirect('/signin')
        }
    }
    catch(error){
        res.end('Invalid token')
    }
};

module.exports = verifyToken;
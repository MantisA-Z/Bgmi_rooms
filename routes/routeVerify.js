const express = require('express');
const verifyRouter = express.Router();
let userModel = require('../models/user')
let tokenModel = require('../models/token')
let user;

verifyRouter.get('/:userId/:token', async (req, res) => {
    console.log(req.params);
    try{
        user = await userModel.findOne({_id: req.params.userId});
        console.log(user);
    }catch(error){
        res.end('Incorrect token');
    };
    if(user){
        let token = await tokenModel.findOne({usrId: req.params.userId, token: req.params.token})
        console.log(token)
        if(token){
            await user.updateOne({_id: user._id, verified: true});
        }
        await tokenModel.deleteOne(token)
        res.end('verified')
    }
})

module.exports = verifyRouter;
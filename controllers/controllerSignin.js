const userModel = require('../models/user');
let tokenModel = require('../models/token');
let sendMail = require('../utils/sendMail');
let crypto = require('crypto');
let JWT = require('jsonwebtoken');

function signinGet(req, res){
    res.render('signin')
}

async function signinPost(req, res){
    let {email, password} = req.body;
    if(email === ''){
        res.render('signin', {error: 'email'})
    }else if(password === ''){
        res.render('signin', {error: 'password'})
    }else{
        let user = await userModel.findOne({email, password});
    if(user){
        if(user.verified === true){
            res.clearCookie('token', {path: '/'});

            JWTUser = {_id: user._id, name: user.name, email: user.email}
            let token = JWT.sign(JWTUser, process.env.JWT_SECRET);
            await res.cookie('token', token);
            res.redirect('/');
        }else if(user.verified === false){
            let tokenFinded = await tokenModel.findOne({usrId: user._id})
            if(tokenFinded){
                let URI = `${process.env.BASE_URI}/${user._id}/${tokenFinded.token}`;
                await sendMail(user.email, 'Email verification', `click here ${URI} to verify`);
                res.render('signin', {error: 'verify'})
            }else{
                let token = new tokenModel({
                    usrId: user._id,
                    token: crypto.randomBytes(32).toString('hex')
                });
                await token.save()
                let URI = `${process.env.BASE_URI}/${user._id}/${token.token}`;
                await sendMail(user.email, 'Email verification', `click here ${URI} to verify`);
                res.render('signin', {error: 'verify'})
            }
        }
    }else{
        res.render('signin', {error: 'no user found'})
    }
    }
}

module.exports = {signinGet, signinPost};
let userModel = require('../models/user.js')
let sendMail = require('../utils/sendMail.js');
let tokenModel = require('../models/token.js');
let crypto = require('crypto');

function signupGet(req, res){
    res.render('signup');
}
async function signupPost(req, res){
    let {name, email, password} = req.body;
    console.log(req.body)
    if(name === ''){
        res.render('signup', {
            error: 'name'
        });
        return;
    }else if(email === ''){
        res.render('signup', {
            error: 'email'
        });
        return;
    }else if(password === ''){
        res.render('signup', {
            error: 'password'
        })
        return
    }else{
        try{
            let user = await userModel.create({
                name, email, password
            });
            let token = new tokenModel({
                usrId: user._id,
                token: crypto.randomBytes(32).toString('hex')
            });
            await token.save();
            console.log('hello')
            let URI = `${process.env.BASE_URI}/${user._id}/${token.token}`;
            await sendMail(user.email, 'Email verification', `click here ${URI} to verify`);
            console.log('hello')
            res.render('signup', {error: 'verify'});

        }catch(error){
            if(error.code === 11000){
                res.render('signup', {error: 'duplicate'})
            }
        }
    }
};

module.exports = {signupGet, signupPost};
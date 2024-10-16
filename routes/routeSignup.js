const express = require('express');
const signupRoute = express.Router();
const {signupGet, signupPost} = require('../controllers/controllerSignup');


signupRoute.get('/', (req, res) => {signupGet(req, res)});
signupRoute.post('/', (req, res) => {signupPost(req, res)});

module.exports = signupRoute;
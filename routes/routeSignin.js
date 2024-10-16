const express = require('express');
const signinRouter = express.Router();
const {signinGet, signinPost} = require('../controllers/controllerSignin');

signinRouter.get('/', (req, res) => { signinGet(req, res) });
signinRouter.post('/', (req, res) => { signinPost(req, res) });

module.exports = signinRouter;
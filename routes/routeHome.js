let express = require('express');
let homeRouter = express.Router();
let homeController = require('../controllers/controllerHome');

homeRouter.get('/', (req, res) => homeController(req, res));

module.exports = homeRouter;
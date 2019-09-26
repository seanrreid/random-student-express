//pull in express
const express = require('express');

//create your router for this path
const rvrRouter = express.Router();  

//pull in the function(s)
const generateRvr = require('../controllers/rvr');

//we only have one thing right now....
rvrRouter.get('/',generateRvr);

module.exports = rvrRouter;
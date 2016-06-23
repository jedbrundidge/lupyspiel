/**
 * Created by jed on 6/22/2016.
 */

//teams rest API
var express = require('express');
var router = express.Router();

//set path to teams model
var Teams = require('../models/teamsModel');

//set which methods we want to expose
Teams.methods(['get', 'post']);

//register teams route
Teams.register(router, '/teams');


module.exports = router;

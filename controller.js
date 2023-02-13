'use strict';

var response = require('./res');
var conn = require ('./connectdb');

exports.index = function(req, res){
    response.ok("running!", res)
}
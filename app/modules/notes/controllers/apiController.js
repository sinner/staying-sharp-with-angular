'use strict';

var util = require('util');
var express = require('express');


exports.all = function (req,res){
    return res.json({"status": 200, "code": "success", "data": {}});
};

exports.error = function (req,res){
    return res.status(500).json({payload : req, message : "Ha ocurrido un error"});
}

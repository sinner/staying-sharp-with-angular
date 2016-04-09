'use strict';

var util = require('util');
var express = require('express');

exports.users = require('./users/index');
exports.notes = require('./notes/index');

exports.default = function (req,res){
    var isAjaxRequest = req.xhr;
    if(isAjaxRequest){
        return res.json({message : "default"});
    }
    else{

    }
}

exports.error = function (req,res){
    return res.status(500).json({payload : req, message : "Ha ocurrido un error"});
}

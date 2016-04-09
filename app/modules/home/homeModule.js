'use strict';

var util = require('util');
var express = require('express');

exports.index = require('./controllers/indexController');

exports.error = function (req,res){
    var isAjaxRequest = helper.isAjaxRequest(req, true);
    if(isAjaxRequest){
        return res.status(500).json({payload : req, message : "Ha ocurrido un error ("+__dirname+__filename+")"});
    }
    else{
        var errorMessage = 'Error 500: Lo sentimos - Ha ocurrido un error, comunique este error al administrador del sistema!';
        var error = {file: __dirname+__filename};
        res.send(errorMessage);
        console.log(error, errorMessage);
    }
};

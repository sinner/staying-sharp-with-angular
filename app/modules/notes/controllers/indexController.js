'use strict';
/**
 * Created by jsinner on 20/12/15.
 */

var util = require('util');
var express = require('express');

exports.default = function (req,res){
    var isAjaxRequest = config.isAjaxRequest(req, true);
    if(isAjaxRequest){
        return res.json({message : "default"});
    }
    else{
        res.send('Hello from notes/IndexController!');
    }
}

exports.error = function (req,res){
    return res.status(500).json({payload : req, message : "Ha ocurrido un error"});
}

'use strict';
/**
 * Created by jsinner on 20/12/15.
 */

var util = require("util");
var express = require("express");
var mongoose = require( 'mongoose' );
var note = mongoose.model('Note');

exports.default = function (req,res){
    note.create({
        title:  "Angularjs",
        author: "jgabrielsinner10@gmail.com",
        body:   "Agularjs es un framework javascript que permite llevar el patrón MVC al lado del Cliente.",
        comments: [],
        hidden: false,
        meta: {
            votes: 5,
            favs: 0
        },
        CreatedOn: Date.now()
    }, function(err, note) {
        var strOutput;
        if (err) {
            console.log("Ha ocurrido un error al crear a nota.");
            console.log(err);
            strOutput = 'Ha ocurrido un error al intentar crear la nota';
        } else {
            console.log('La nota ha sido Creada: ' + team);
            strOutput = "La nota '"+note.title+"' ha sido creada exitosamente.";
        }

        var isAjaxRequest = helper.isAjaxRequest(req, true);
        if(isAjaxRequest){
            return res.json({message : "default"});
        }
        else{
            res.render("page/home/index", {"name": "José Gabriel", "strOutput": strOutput});
            console.log(res);
        }
    });
};

exports.error = function (req,res){
    return res.status(500).json({payload : req, message : "Ha ocurrido un error"});
};

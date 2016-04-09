try {

    // Load external dependencies
    const express = require('express');
    const swig = require('swig');
    const path = require('path');
    const session = require('express-session');
    const mongoose = require('mongoose');

    // Load app dependencies
    const config = require('./config');
    const helper = require('./app/services/helper');

    // Connect to database
    var db = mongoose.connection;
    mongoose.connect(config.db.url, {server: {socketOptions: {keepAlive: 1}}});
    db.once('open', function (callback) {
        console.log("Conexión establecida con MongoDB ("+config.db.url+")");
    });
    db.on('error', console.error.bind(console, 'connection error:'));

    // Set globals vars to application
    global.config = config;
    global.helper = helper;

    // Set global __basedir to the directory of the application entry-point file
    global.__basedir = path.resolve(__dirname, '.');

    // Load main routes and bootstrapping configurations
    const bootstrap = require('./app/bootstrap');

    //CORS middleware
    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Access-Token');
        next();
    }

    var app = express();
    app.use(allowCrossDomain);

    app.use(express.static(__dirname));

    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', config.dirServerViews);
    app.set('view cache', false);

    swig.setDefaultTZOffset((new Date).getTimezoneOffset());
    swig.setDefaults({ cache: false });

    app.use('/', bootstrap);

    /// catch 404 and forwarding to error handler
    app.use(function(req, res, next) {
        var errorMessage = "Error 404: Lo sentimos, página no encontrada, comunique este error al administrador del sistema! ("+req.uri+")";
        var err = new Error(errorMessage);
        err.status = 404;
        var isAjaxRequest = helper.isAjaxRequest(req, true);
        if(isAjaxRequest){
            return res.status(404).json({payload : req, message : errorMessage});
        }
        else{
            var error = {file: __dirname+__filename};
            console.log(error, errorMessage);
        }
        next(err);
    });

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({'error': {
            "message": err.message,
            "stack": err.stack.split("\n"),
        }});
        console.log(err);
        console.log("STACK:");
        console.log(err.stack.split("\n"));
        console.log("TRACE:");
        console.trace();
    });

    module.exports = app;

} catch(err) {
    console.log("Ha ocurrido un error en tiempo de ejecución:");
    console.log(err);
    console.log("STACK:");
    console.log(err.stack.split("\n"));
    console.log("TRACE:");
    console.trace();
}

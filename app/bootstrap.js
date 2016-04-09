var crypto = require('crypto');
var fs = require('fs');

require('./config/db');

// TODO
// prompt the user for parse.com / facebook/ instagram/ or twitter keys
//
function generateKey() {
    crypto.randomBytes(40, function(ex, buf) {
        var secret = buf.toString('hex');
        fs.writeFile(
            '.env',
            'export EXPRESS_SECRET=' + secret + '\n'
        );
    });
};

console.log('Bienvenido al servidor NodeJs para la aplicación "Staying Sharp"!\n');

generateKey();

/**
 * Routes
 */
var express = require('express');
var router = express.Router();
require('./config/routes')(express, router);

module.exports = router;

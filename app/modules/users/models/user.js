'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:  String,
    email: String,
    bio:   String,
    hobbies: [{ name: String }],
    date: { type: Date, default: Date.now },
    active: Boolean
});

var User = module.exports = mongoose.model('User', userSchema);

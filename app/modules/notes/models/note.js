'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    body: { type: String, required: true},
    comments: [{ author: String, body: String, date: Date }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

var Note = module.exports = mongoose.model('Note', noteSchema);

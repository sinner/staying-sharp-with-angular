"use strict";
module.exports = function(express, router){
    /**
     * Controllers
     * @type {exports|module.exports}
     */
    var home = require('../modules/home/homeModule');
    var notes = require('../modules/notes/notesModule');
    // var users = require('./users/index');

    router.get('/', home.index.default);
    router.get('/api/notes', notes.api.all);
    // router.get('/users', api.notes.all);

    // router.get('/notes/:id', api.notes.get);
    // router.put('/notes/:id', api.notes.update);
    // router.delete('/notes/:id', api.notes.delete);
    //
    // router.get('/users', api.users.all);
    // router.post('/users',api.users.create);
    // router.get('/users/:id', api.users.get);
    // router.put('/users/:id', api.users.update);
    // router.delete('/users/:id', api.users.delete);
    //api error
    router.get('/error', home.error);
};

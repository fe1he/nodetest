var app = require('express').Router();
var album = require('../module/albums.js');

app.route('/').get(function(req, res, next) {
    res.status(200).send(album);
});

app.route('/:id')
.get(function(req, res, next) {
    var id = req.params.id - 1;
    var isAlbum = album[id];
    if (isAlbum) {
        res.status(200).send(album[id]);
    } else {
        res.status(404).send('error');
    }
})

.put(function(req, res, next) {

});

app.route('/longerSong').get(function(req, res, next) {
    var longerSong;
    res.status(200).send(longerSong);
});

app.route('/singer/:name').get(function(req, res, next) {
    var id = req.param.id - 1;
    var singerName;
    res.status(200).send(singerName[id]);
});

app.route('/serarch?type=xxx').get(function(req, res, next) {
    var searchType;
    res.status(200).send(searchType);
});


module.exports = app;

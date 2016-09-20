var app = require('express').Router();
var album = require('../module/albums.js');

app.route('/').get(function(req, res, next) {
    res.status(200).send(album);
});

app.route('/longerSong').get(function(req, res, next) {
    var longerSong = new Array();
    for (i=0;i<album.length;i++) {
        if (album[i].length > 180) {
            longerSong.push(album[i]);
        }
    }
    res.status(200).send(longerSong);
});

app.route('/singer/:name').get(function(req, res, next) {
    var singerName = req.params.name;
    var trans = new RegExp(singerName,'g');
    var nameList = new Array();

    for (i=0;i<album.length;i++) {
        if (trans.test(album[i].singer) === true) {
            nameList.push(album[i]);
        }
    }

    if (nameList > album.length) {
        res.status(200).send(nameList);
    } else {
        res.status(404).send('error');
    }
});


app.route('/search').get(function(req, res, next) {
    var searchType = req.query.type;
    var trans = new RegExp(searchType);
    var list = new Array();

    for (i=0;i<album.length;i++) {
        if (trans.test(album[i].type) === true) {
            list.push(album[i]);
        }
    }
    if (list.length > 0) {
        res.status(200).send(list);
    } else {
        res.status(404).send('type search error');
    }
});

app.route('/:id')
.get(function(req, res, next) {
    var id = req.params.id - 1;
    var isAlbum = album[id];
    if (isAlbum) {
        res.status(200).send(album[id]);
    } else {
        res.status(404).send('no album');
    }
})

.put(function(req, res, next) {
    var id = req.params.id - 1;
    var isAlbum = album[id];
    var length = parseInt(req.body.length);
    var title = req.body.title;

    if (isAlbum) {
        if (length && title) {
            isAlbum.length = length;
            isAlbum.title = title;
            res.status(200).send(isAlbum);
        } else {
            res.status(200).send('input has an error');
        }
    } else {
        res.status(404).send('no album');
    }
});

module.exports = app;

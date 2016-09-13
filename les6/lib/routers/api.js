var _require = require('express').Router();
var newsModel = require('../models/news');

_require.route('/').get(function(req, res, next) {
    res.status(200).send(newsModel);
});

_require.route('/:id')
.get(function(req, res, next) {

    var _id = req.params.id - 1;
    var _news = newsModel[_id];

    if (_news) {
        res.status(200).send(news);
    } else {
        res.status(404).send('error');
    }
})

.delete(function(req, res, next) {

    var _id = req.params.id - 1;
    var _news = newsModel[_id];

    if (_news) {
        newsModel.splice(_id, 1);
        res.status(200).send(newsModel)
    } else {
        res.status(404).send('error')
    }
});

module.exports = _require;

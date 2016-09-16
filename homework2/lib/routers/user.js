var app = require('express').Router();
var user = require('../module/users.js');

app.route('/').get(function(req, res, next) {
    res.status(200).send(user);
});

app.route('/:id')
.get(function(req, res, next) {
    var id = req.params.id - 1;
    var isUser = user[id];

    if (isUser) {
        res.status(200).send(user[id]);
    } else {
        res.status(404).send('error');
    }
})

.put(function(req, res, next) {
    var id = req.params.id - 1;
    var isUser = user[id];
    var age = parseInt(req.body.age);

    if (isUser) {
        if (age && age > 0) {
            sUser.age = age;
            res.status(200).send(isUser);
        } else {
            res.status(200).send('not int type');
        }
    } else {
        res.status(404).send('no user');
    }
});

app.route('/count/:sex').get(function(req, res, next) {
    var count;
    res.status(200).send(count);
});

app.route('/ageAvg').get(function(req, res, next) {
    var ageAvg;
    res.status(200).send(ageAvg);
});

app.route('/search?company=xxx').get(function(req, res, next) {
    var searchCompany;
    res.status(200).send(searchCompany);
});


module.exports = app;

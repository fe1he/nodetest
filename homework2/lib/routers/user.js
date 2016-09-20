var app = require('express').Router();
var user = require('../module/users.js');

app.route('/').get(function(req, res, next) {
    res.status(200).send(user);
});

app.route('/count/:sex').get(function(req, res, next) {
    var sex = req.params.sex;
    var count = 0;

    for (i=0;i<user.length;i++) {
        if (user[i].sex === sex) {
            count++;
        }
    }

    res.status(200).send(count.toString());
});

app.route('/ageAvg').get(function(req, res, next) {
    var ageAvg = 0;
    var ageAll = 0;
    var count = 0;
    // console.log('zhengchang');
    for(i=0;i<user.length;i++) {
        ageAll += user[i].age;
        // console.log(user[i]);
        count++;
        // console.log(count);
    }

    ageAvg = ageAll / count;
    res.status(200).send(ageAvg.toString());
});

app.route('/search').get(function(req, res, next) {
    var searchCompany = req.query.company;
    var trans = new RegExp(searchCompany,'i');
    var list = new Array();

    for (i=0;i<user.length;i++) {
        if (trans.test(user[i].company) === true) {
            list.push(user[i]);
        }
    }
    if (list.length > 0) {
        res.status(200).send(list);
    } else {
        res.status(404).send('company search error');
    }

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
        if (age) {
            isUser.age = age;
            res.status(200).send(isUser);
        } else {
            res.status(200).send('not int type');
        }
    } else {
        res.status(404).send('no user');
    }
});

module.exports = app;

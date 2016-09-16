var app = require('express')(),
    bodyParser = require('body-parser')
    tool = require('./lib/tool.js');

app.use(bodyParser.urlencoded({
    extended: false
}));

// 将要处理的逻辑交给具体的包来执行
app.use('/news', require('./lib/routers/api.js'));

app.use('/*', function(req, res, next) {
    res.status(404).send('Not Found.');
    // res.status(200).send('hello');
});

app.listen(3000, function() {
    tool.printLine();
    tool.printDate();
    tool.printLine();
    console.log('lesson 6 demo.');
    tool.printLine();
});

/**
 * Created by varomatic on 18/1/15.
 */
var restify = require('restify');

var server = restify.createServer();

//restify middleware
server.use(function (req, res, next) {
    console.log('middleware');
    next();
});


//restify route
server.get(
    {
        name: 'test', //name for delegation
        path: '/test/:name'
    }
    , function (req, res, next) {
        console.log(req.params);
        res.send('hello ' + req.params.name);
        next();
    });

server.get(
    '/', function (req, res, next) {
        next('test'); //passing to 'test' route
    }
);


server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

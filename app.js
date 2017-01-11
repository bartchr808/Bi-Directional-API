// app.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 1998; // set our port

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/pizzaDB"); // connect to database

var Pizza = require('./app/models/pizzaModel');

// ROUTES FOR OUR API
// =============================================================================
var router1 = express.Router();

// middleware to use for all requests
router1.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router1.get('/', function (req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});


router1.get("/form", function (req, res) {
    res.sendfile('./frontEnd/html/index.html');
});

router1.post("/form/order", function (req, res) {
    var pizza = new Pizza(); // create a new instance of the Pizza model
    pizza.topping0 = req.body.topping0; // set the bears name (comes from the request)
    pizza.topping1 = req.body.topping1;
    pizza.topping2 = req.body.topping2;
    pizza.topping3 = req.body.topping3;
    pizza.topping4 = req.body.topping4;
    pizza.topping5 = req.body.topping5;
    pizza.topping6 = req.body.topping6;
    pizza.topping7 = req.body.topping7;
    pizza.topping8 = req.body.topping8;
    pizza.topping9 = req.body.topping9;
    console.log(pizza.topping2);
    //    console.log(pizza); //Bart
    // save the bear and check for error
    pizza.save(function (err) {
        //console.log("2");
        if (err)
            res.send(err);

        res.json({
            message: 'Pizza topping created!'
        });
        //        console.log(pizza);
    })
})

router1.get("/form/order", function (req, res) {
    Pizza.find(function (err, pizza) {
        if (err)
            res.send(err);

        res.json(pizza);
    });
})



router1.delete("/form/order/:pizzaID", function (req, res) {
    Pizza.remove({
        _id: req.params.pizzaID
    }, function (err, bear) {
        if (err)
            res.send(err);

        res.json({
            message: 'Successfully deleted'
        });
    });
});


// SOCKET.IO
// ============================================================================

io.on('connection', function (client) {
    console.log('Client connected...');

    client.on('join', function (data) {
        console.log(data);
    });

    client.on('messages', function (data) {
        console.log(data);
        //        client.emit('broad', data);
        //        client.broadcast.emit('broad', data);

        Pizza.find(function (err, pizza) {
            if (err)
                res.send(err);
            client.emit('broad', JSON.stringify(pizza));
            client.broadcast.emit('broad', JSON.stringify(pizza));
            console.log(pizza);
            //            client.emit('printPiz', pizza);
            //            client.broadcast.emit('printPiz', pizza);
        });

    });

});

app.use(express.static(__dirname + '/bower_components'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index2.html');
});

var router2 = express.Router();

router2.get("/index.js", function (req, res) {
    res.sendfile('./frontEnd/JS/index.js');
})

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router1);
app.use('/JS', router2);
// START THE SERVER
// =============================================================================
server.listen(port); //app.listen(port);
console.log('Magic happens on port ' + port);
// app/models/bear.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
    topping0: String,
    topping1: String,
    topping3: String,
    topping4: String,
    topping5: String,
    topping6: String,
    topping7: String,
    topping8: String,
    topping9: String,
});

module.exports = mongoose.model('Pizza', PizzaSchema);
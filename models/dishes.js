const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    desciption : {
        type : String,
        required : true
    }
},{
        timestamps : true    
});

var dishes = mongoose.model('Dish', dishSchema);

module.exports = dishes;
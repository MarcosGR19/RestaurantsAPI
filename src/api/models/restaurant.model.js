const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const restaurantSchema = mongoose.Schema(
    {
        name: {type:'String', required:true},
        city: {type:'String', required:true},
        foundationYear: {type:'Number'},
        restaurantType: {type:'String'},
        chefs: [ {type: mongoose.Schema.Types.ObjectId, ref: 'chef'}]
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Restaurant = mongoose.model('restaurant',restaurantSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Restaurant;


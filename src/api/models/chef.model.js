const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const chefSchema = mongoose.Schema(
    {
        name: {type:'String', required:true},
        nationality: {type:'String', required:true},
        michelinStars: {type:'Number'},
        dishes: [{type:'String', required:true}]
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Chef = mongoose.model('chef',chefSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Chef;
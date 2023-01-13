const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const userSchema = mongoose.Schema(
    {
        email: {type: String, required:true},
        password: {type: String, required:true},
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const User = mongoose.model('user',userSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = User;
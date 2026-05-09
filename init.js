const mongoose = require('mongoose');


const Schema = new mongoose.Schema({

    username : {
        type : String,
    },
    password : String,
});

const User = new mongoose.model("User" , Schema);

module.exports = User;
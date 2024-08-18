const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    
    phone:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
})

const User=mongoose.model('UserModel',userSchema)

module.exports =User;
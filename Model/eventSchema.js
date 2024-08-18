const mongoose =require('mongoose')
const User=require('./userSchema')

const eventSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId ,ref:'User',required:true
    },
    Doe:String,
    LocOfEvent:String,
    VendorList:[String],
    NoOfAttender:Number
})

const Event=mongoose.model('Event',eventSchema)

module.exports =Event
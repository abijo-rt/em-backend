const mongoose=require('mongoose')
const VendorDetails =require('./vendorDetails')
const Event=require('./eventSchema')

const venderevents=new mongoose.Schema({
    vendor:{
        type:mongoose.Schema.Types.ObjectId ,ref:'VendorDetails',required:true
    },
    event:{
        type:mongoose.Schema.Types.ObjectId ,ref:'Event',required:true
    },
    status : [Boolean],
    feedback : String ,
    billamount : String , 
    billpaid : String ,
    eventStatus : Number
    

})

const VendorEvents = mongoose.model('VendorEvents',venderevents);

module.exports = VendorEvents
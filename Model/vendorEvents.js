const mongoose=require('mongoose')
const VendorDetails =require('./vendorDetails')
const Event=require('./eventSchema')

const venderevents=new mongoose.Schema({
    vendor:{
        type:mongoose.Schema.Types.ObjectId ,ref:'VendorDetails',required:true
    },
    completed:[Event],
    rejected:[Event],
    ongoing:[Event]
})

const VendorEvents=mongoose.model('VendorEvents',venderevents);

module.export=VendorEvents
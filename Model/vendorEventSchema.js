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
    billamount_advance : String ,
    eventStatus : Number,
    billfilename :String,
    billfile: [{
        bill: String,
        mode_of_payment: {
            type: String,
            enum: ['upi', 'card', 'cash'],
            required: true
        }
    }]
    

})

const VendorEvents = mongoose.model('VendorEvents',venderevents);

module.exports = VendorEvents
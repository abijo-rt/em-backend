const mongoose =require('mongoose')

    const venderdetails= new mongoose.Schema({
        vendor_id:Number,
        vendor_name:String,
        vendor_location:String,
        vendor_contact:Number,
        doj:String
    })


const VendorDetails = mongoose.model('VendorDetails',venderdetails)

module.export=VendorDetails;

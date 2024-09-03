const VendorDetails =require('../Model/vendorDetails')


const newVedor=async (req,res) => {
    
    try {
        const newven=new VendorDetails({
            
            vendor_name:req.body.name,
            // vendor_location:String,
            vendor_contact:req.body.phone,
            vendor_password:req.body.password,
            // doj:String
        })
        console.log(newven);
        if(await newven.save()){
        console.log("user created")
    }
} catch (error) {
        console.log(error)
        
    }
    res.status(200).send({ ok: true });
}

module.exports = newVedor;

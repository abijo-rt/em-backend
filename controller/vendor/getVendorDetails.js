const VendorDetails = require('../../Model/vendorDetails');

const  getVendorDetails = async  (req, res) => {

  const  {id} = req.body
  // console.log("this is from the getuserdetails")
  // console.log(req.body.id)

  try {
    // console.log("vendor  details")
    const user = await VendorDetails.findById(id).select('-password')
    res.status(200).send(user)
  } catch (error) {
    
  }
    

}

module.exports = getVendorDetails
const User = require('../../Model/userSchema');

const  getUserDetails = async  (req, res) => {

  const  {id} = req.body
  // console.log("this is from the getuserdetails")
  // console.log(req.body.id)

  try {
      // console.log("user  details")
    const user = await User.findById(id).select('-password')
    res.status(200).send(user)

    
  } catch (error) {
    
  }
    

}

module.exports = getUserDetails
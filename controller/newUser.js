 const User = require('../Model/userSchema');
 const Event =require('../Model/eventSchema')
 
 
 const newUser = async (req,res)=>{
    
     
     const name=req.body.Userdetails[0].value;
     const Phone=req.body.Userdetails[1].value;
     const Doe=req.body.Userdetails[2].value;
     const NOV=req.body.Userdetails[3].value;
     const NOA=req.body.Userdetails[4].value;
     const pincode=req.body.Userdetails[5].value;
     const VendorList=req.body.VendorDetails

     const user=new User({
         name:name,
         phone:Phone
     })

     const event=new Event({
        user:user,
        Doe:Doe,
        LocOfEvent:NOV,
        VendorList:VendorList,
        NoOfAttender:NOA

     })

     await user.save()
     await event.save()
   
res.status(200).send({ ok: true });
}


const notify =async (VendorList) => {
    
}


module.exports = newUser;
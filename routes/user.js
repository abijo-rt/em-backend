const express = require('express');
const router = express.Router();
const newUser =require('../controller/user/newUser')
const loginUser =require('../controller/user/userLogin')
const getUserDetails =require('../controller/user/getUserDetails');
const newEvent = require('../controller/newEvents');
const eventList = require('../controller/user/eventList');
const getEventVendorList = require('../controller/user/getEventVendorList');
const bodyParser = require('body-parser');
const cors = require('cors');


router.use(cors());
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: true }));

router.post('/newuser',newUser);
router.post('/loginuser',loginUser);
router.post('/getUserDetails',getUserDetails);
router.post('/newevent',newEvent);
router.post('/eventList',eventList);
router.post('/getEventVendorList',getEventVendorList); 
router.get('/test',(req,res)=>{
    res.send('test')
}); 


module.exports = router;
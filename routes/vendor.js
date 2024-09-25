const express = require('express');
const router = express.Router();

const newVendor = require('../controller/vendor/newVendor')
const loginVendor = require('../controller/vendor/loginVendor')
const getVendorList = require('../controller/vendor/getVendorList')
const getVendorDetails = require('../controller/vendor/getVendorDetails')
const updatePhasedata = require('../controller/vendor/updatePhasedata')
const getEventListForVendorPage = require('../controller/vendor/getEventListForVendorPage')


router.post('/newvendor',newVendor);
router.post('/loginvendor',loginVendor);
router.post('/getVendorList',getVendorList);
router.post('/getVendorDetails',getVendorDetails);
router.post('/updatePhasedata',updatePhasedata);
router.get('/getEventListForVendorPage',getEventListForVendorPage);


module.exports = router;
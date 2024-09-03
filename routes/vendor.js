const express = require('express');
const router = express.Router();

const newVendor =require('../controller/newVendor')


router.post('/newvendor',newVendor);


module.exports = router;
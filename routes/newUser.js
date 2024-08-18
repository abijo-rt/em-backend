const express = require('express');
const router = express.Router();
const newUser =require('../controller/newUser')


router.post('/',newUser);


module.exports = router;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const venderdetails = new mongoose.Schema({
    vendor_id: Number,
    vendor_name: String,
    vendor_location: String,
    vendor_contact: Number,
    vendor_password: String,
    doj: String
});

venderdetails.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('vendor_password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        
        const hash = await bcrypt.hash(user.vendor_password, salt);

        user.vendor_password = hash;
        
        next();

    } catch (err) {
        next(err);
    }
});

const VendorDetails = mongoose.model('VendorDetails', venderdetails);

module.exports = VendorDetails;

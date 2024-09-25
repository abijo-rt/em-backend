const VendorEvents = require('../../Model/vendorEventSchema');

const updatePhasedata = async (req, res) => {
    const { phase, choice, vendor_id } = req.body;

    console.log(phase);
    console.log(choice);
    console.log(vendor_id);
    
    try {
        
        const updated = await VendorEvents.updateOne(
            { _id: vendor_id },
            { $set: { [`status.${phase}`]: choice } } 
        );
        
        console.log(updated);
        res.status(200).json(updated); 
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports = updatePhasedata;

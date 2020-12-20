const express = require('express');
const router = express.Router();
const Papyrus = require('../models/Papyrus');

router.patch('/:sign', async (req,res) => {    
    console.log(req.params);
    console.log(req.body);
    const sign = req.params.sign;    
    try {
        
        const updatedPapyrus = await Papyrus.updateOne(
            { Sign: sign},
            {
                $set: {
                    Name: req.body.Name,
                    Sign: req.body.Sign,
                    Reference: req.body.Reference,
                    Date: req.body.Date,
                    Century: req.bodyCentury,
                    EarlyDate: req.body.EarlyDate,
                    LateDate: req.body.LateDate,
                    GospelOfJohnText: req.body.GospelOfJohnText,
                    PlaceOfDiscovery: req.body.PlaceOfDiscovery,
                    Category: req.body.Category,
                    DiscoveryLatX: req.body.DiscoveryLatX,
                    DiscoveryLongY: req.body.DiscoveryLongY                  
                }
            }
        );
        res.json(updatedPapyrus);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;
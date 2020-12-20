const express = require('express');
const Papyrus = require('../models/Papyrus');
const router = express.Router();

router.post('/', (req,res) => {    
    const papyrus = new Papyrus({
        Name: req.body.Name,
        Sign: req.body.Sign,
        Date: req.body.Date,
        Century: req.body.Century,
        EarlyDate: req.body.EarlyDate,
        LateDate: req.body.LateDate,
        GospelOfJohnText: req.body.GospelOfJohnText,
        PlaceOfDiscovery: req.body.PlaceOfDiscovery,
        Category: req.body.Category,
        DiscoveryLatX: req.body.DiscoveryLatX,
        DiscoveryLongY: req.body.DiscoveryLongY  
    });
    
    papyrus.save()    
    .then(data => {
        res.json(data);        
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = router;
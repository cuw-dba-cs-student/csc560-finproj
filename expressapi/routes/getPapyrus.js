const express = require('express');
const Papyrus = require('../models/Papyrus');
const router = express.Router();

router.get('/:sign', async (req,res) => {  
    const sign = req.params.sign;
    try {
        const papyrus = await Papyrus.findOne({ "Sign": sign});
        console.log(papyrus);
        res.json(papyrus);
    }catch(err){
        res.json({message:err});
    }
}); 

module.exports = router;
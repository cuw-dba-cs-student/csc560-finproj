const express = require('express');
const router = express.Router();
const Papyrus = require('../models/Papyrus');

router.patch('/:sign', async (req,res) => {    
    const id = req.params.sign;    
    try {
        const updatedPapyrus = await Papyrus.findByIdAndUpdate(sign, req.body, { useFindAndModify: false })
        res.json(updatedPapyrus);
    }catch{
        res.json({message: err});
    }
});

module.exports = router;
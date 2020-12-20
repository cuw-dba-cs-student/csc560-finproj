const express = require('express');
const Papyrus = require('../models/Papyrus');
const router = express.Router();

router.get('/:category', async (req,res) => { 
    const category = req.params.category;   
    try {
        const papyri = await Papyrus.find({Category: /^category/});
        res.json(papyri);
    }catch{
        res.json({message:err});
    }
}); 

module.exports = router;
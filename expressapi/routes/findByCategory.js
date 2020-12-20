const express = require('express');
const Papyrus = require('../models/Papyrus');
const router = express.Router();

router.get('/:category', async (req,res) => { 
    category = req.params.category;   
    if (category != 'none') {
        category = '^' + category + ' -';
    }
    try {        
        const papyri = await Papyrus.find({Category: new RegExp(category, 'i')});
       //db.members.find(name: new RegExp(search， ‘i')) //For substring search, case insensitive
        res.json(papyri);
    }catch{
        res.json({message:err});
    }
}); 

module.exports = router;
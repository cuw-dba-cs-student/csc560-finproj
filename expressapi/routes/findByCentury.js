const express = require('express');
const Papyrus = require('../models/Papyrus');
const router = express.Router();

router.get('/:century', async (req,res) => {    
    try {
        const papyri = await Papyrus.find({ Century: /century/ });
        res.json(roster);
    }catch{
        res.json({message:err});
    }

}); 

module.exports = router;
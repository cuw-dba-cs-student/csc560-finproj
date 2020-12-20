const express = require('express');
const Papyrus = require('../models/Papyrus');
const router = express.Router();

router.get('/:century', async (req,res) => {    
    century = req.params.century
    try {
        const papyri = await Papyrus.find({ Century: new RegExp(century) });
        console.log(res);
        res.json(papyri);
    }catch(err){
        res.json({message:err});
    }

}); 

module.exports = router;
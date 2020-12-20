const express = require('express');
const Papyrus = require('../models/Papyrus');
const router = express.Router();

router.get('/', async (req,res) => {    
    try {
        const papyri = await Papyrus.find();
        res.json(papyri);
    }catch(err){
        res.json({message:err});
    }
});
   
module.exports = router;
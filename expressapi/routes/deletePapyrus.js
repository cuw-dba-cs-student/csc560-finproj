const express = require('express');
const router = express.Router();
const Papyrus = require('../models/Papyrus');

router.delete('/:sign', async (req, res) => {
    const sign = req.params.sign;
    console.log('Deleting papyrus identified by ' + sign);
    try {
        const deletedPlayer = await Papyrus.Player.deleteOne({Sign: sign});
        res.json(deletedPlayer);
    } catch(err) {
        res.json({
            message: err
        });
    }

});

module.exports = router;
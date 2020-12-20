const express = require('express');
const router = express.Router();
const Papyrus = require('../models/Papyrus');

router.delete('/:sign', async (req, res) => {
    const id = req.params.sign;
    try {
        const deletedPlayer = await Papyrus.findByIdAndRemove(sign);
        res.json(deletedPlayer);
    } catch {
        res.json({
            message: err
        });
    }

});

module.exports = router;
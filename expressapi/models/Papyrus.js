const mongoose = require('mongoose');

const papyrusSchema = mongoose.Schema(
    {
        Name: String,
        Sign: String,
        Reference: String,
        Date: String,
        Century: String,
        EarlyDate: String,
        LateDate: String,
        GospelOfJohnText: String,
        PlaceOfDiscovery: String,
        Category: String,
        DiscoveryLatX: String,
        DiscoveryLongY: String   
    },
    {collection: 'GospelOfJohn'});

// Mongoose will automatically looks for the plural, lowercased version of the model name
// that is why I set the "collection" option for the schema above. 
module.exports = mongoose.model('Papyrus',papyrusSchema);

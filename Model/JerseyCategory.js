const mongoose = require("mongoose");

const JerseyCategorySchema = new mongoose.Schema({

    Category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    image_public_id: {
        type: String,
        required: true
    }

},
    { timestamps: true }
)

module.exports = mongoose.model('JerseyCategory', JerseyCategorySchema);
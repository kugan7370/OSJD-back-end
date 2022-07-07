const mongoose = require('mongoose')

const JerseySchema = new mongoose.Schema({
    category_id: {
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
    },
    price: {
        type: Number,
        require: true

    },
    type: {
        type: String,
        require: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Jersey', JerseySchema)
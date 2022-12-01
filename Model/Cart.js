const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    jersey_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    jersey_name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    jersey_number: {
        type: String,
        required: true
    },

    jersey_image: {
        type: String,
        required: true
    },

},
    { timestamps: true }
)

module.exports = mongoose.model('Cart', CartSchema)
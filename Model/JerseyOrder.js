const mongoose = require('mongoose')

const jerseyOrderSchema = new mongoose.Schema({
    jersey_id: {
        type: String,
        required: true
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
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    is_shipped: {
        type: Boolean,
        default: false
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    jersey_image: {
        type: String,
        required: true
    },



}, { timestamps: true })



module.exports = mongoose.model('JerseyOrders', jerseyOrderSchema)
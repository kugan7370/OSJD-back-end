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
    number: {
        type: Number,
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
    shipped: {
        type: Boolean,
        default: false
    }



}, { timestamps: true })



module.exports = mongoose.model('JerseyOrders', jerseyOrderSchema)
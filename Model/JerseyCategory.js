const mongoose = require("mongoose");

const JerseyCategorySchema = new mongoose.Schema({
    // {
    //     id: 1,
    //     name: "We are Legion",
    //     type: "Original t-shirt",
    //     image: "https://www.pngall.com/wp-content/uploads/5/Red-Jersey.png",
    //     addCard: true
    // },

    Category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },

},
    { timestamps: true }
)

module.exports = mongoose.model('JerseyCategory', JerseyCategorySchema);
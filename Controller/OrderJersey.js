const JerseyOrder = require("../Model/JerseyOrder");


exports.OrderJersey = async (req, res) => {
    const user_id = req.user._id
    const { jersey_id, country, state, fullname, jersey_name, size, jersey_number, phone, jersey_image, address, zipCode } = req.body

    if (!fullname) {
        return res.status(400).json({
            message: 'fullname is required!'
        })
    }
    if (!phone) {
        return res.status(400).json({
            message: 'Phone number is required!'
        })
    }
    if (!address) {
        return res.status(400).json({
            message: 'address is required!'
        })
    }
    if (!country) {
        return res.status(400).json({
            message: 'country is required!'
        })
    }
    if (!state) {
        return res.status(400).json({
            message: 'state is required!'
        })
    }
    if (!zipCode) {
        return res.status(400).json({
            message: 'zipCode is required!'
        })
    }



    const Order_jersey = new JerseyOrder({
        jersey_id, country, state, fullname, jersey_name, size, jersey_number, phone, jersey_image, address, zipCode, user_id
    })

    const Order_Save = await Order_jersey.save()
    if (!Order_Save) {
        return res.status(400).json({
            message: 'message is something wrong'
        })
    }
    else {
        return res.status(200).json("Ordered Successfully")
    }

}



exports.getOrderedJersey = async (req, res) => {



    const get_OrderJersey = await JerseyOrder.find()


    if (!get_OrderJersey) {
        return res.status(200).json({
            message: 'No jersey available'
        })
    }
    if (get_OrderJersey) {
        return res.status(200).json(get_OrderJersey)
    } else {

        return res.status(400).json({
            message: 'message is something wrong'
        })
    }


}
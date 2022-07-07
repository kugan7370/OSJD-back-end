const JerseyOrder = require("../Model/JerseyOrder");


exports.OrderJersey = async (req, res) => {
    const jersey_id = req.params.id;
    const { jersey_name, size, number, phone, address, } = req.body;

    const Order_jersey = new JerseyOrder({
        jersey_id,
        jersey_name,
        size,
        number,
        phone,
        address,
    })

    const Order_Save = await Order_jersey.save()
    if (!Order_Save) {
        return res.status(400).json({
            Message: 'message is something wrong'
        })
    }
    else {
        return res.status(200).json(Order_jersey)
    }

}



exports.getOrderedJersey = async (req, res) => {



    const get_OrderJersey = await JerseyOrder.find()


    if (!get_OrderJersey) {
        return res.status(200).json({
            Message: 'No jersey available'
        })
    }
    if (get_OrderJersey) {
        return res.status(200).json(get_OrderJersey)
    } else {

        return res.status(400).json({
            Message: 'message is something wrong'
        })
    }


}
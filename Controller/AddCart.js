const Cart = require("../Model/Cart");



exports.AddCarts = async (req, res) => {
    const { jersey_id, size, price, jersey_name, jersey_number, jersey_image } = req.body;

    if (!size) {
        return res.status(400).json({
            message: 'Jersey size is required!'
        })
    }
    if (!jersey_name) {
        return res.status(400).json({
            message: 'Jersey Name is required!'
        })
    }
    if (!jersey_number) {
        return res.status(400).json({
            message: 'Jersey Number is required!'
        })
    }




    const user_id = req.user._id
    const AddCart = new Cart({
        jersey_id,
        user_id,
        price,
        jersey_name,
        size,
        jersey_number,
        jersey_image,
    })

    const Add_Cart = await AddCart.save()
    if (!Add_Cart) {
        return res.status(400).json({
            message: 'something went wrong'
        })
    }
    else {
        return res.status(200).json(Add_Cart)
    }

}



exports.getCardDetails = async (req, res) => {

    const user_id = req.user._id

    const get_CardDetails = await Cart.find({ user_id })


    if (!get_CardDetails) {
        return res.status(200).json({
            message: 'No jersey available'
        })
    }
    if (get_CardDetails) {
        return res.status(200).json(get_CardDetails)
    } else {

        return res.status(400).json({
            message: 'message is something wrong'
        })
    }


}

exports.removeCartItem = async (req, res, next) => {
    const user_id = req.user._id
    const { id } = req.params
    try {
        const remove_CartItem = await Cart.deleteOne({ user_id, _id: id })
        res.status(200).json("item has been removed")

    } catch (error) {
        next(error)
    }
}
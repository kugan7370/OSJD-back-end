const Cart = require("../Model/Cart");
const JerseyOrder = require("../Model/JerseyOrder");

const stripe = require("stripe")('sk_test_51MAZPJHO1AtNNbDK0mi7HnWe1KLOAsTEYqLqQ4UyZJ4r8uhnXqBwi0JxYGzWtanKfFZ69m6KuM4J7CEG7whjNIiI007aX2U1f7');

exports.stripePayment = async (req, res, next) => {

    const user_id = req.user._id
    const { fullname,
        address,
        zipCode,
        phone,
        country,
        state, getCarts } = req.body


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



    // let getCarts = getCartData?.getCarts
    console.log(getCarts);
    const line_items = getCarts?.map((getcart) => {
        console.log(getcart);
        // jersey_id: getcart?.jersey_id,
        // jersey_name: getcart?.jersey_name,
        // size: getcart?.size,
        // jersey_number: getcart?.jersey_number,
        // jersey_image: getcart?.jersey_imagere
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: getcart.jersey_name,
                    images: [getcart.jersey_image],
                    metadata: {
                        id: getcart._id
                    }
                },
                unit_amount: getcart.price * 100
            },
            quantity: 1,
        }
    })
    // Create a PaymentIntent with the order amount and currency

    try {
        const session = await stripe.checkout.sessions.create({
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: { amount: 0, currency: 'usd' },
                        display_name: 'Free shipping',
                    },
                },
            ],
            line_items: line_items,
            mode: 'payment',
            success_url: 'http://localhost:3000/',
            cancel_url: 'http://localhost:3000/userOrderInfo',
        });
        if (session.url) {
            console.log(session.url);

            //save order items
            const OrderResult = getCarts.map(async (getCart) => {
                const Order_jersey = new JerseyOrder({
                    jersey_id: getCart?.jersey_id,
                    country,
                    state,
                    fullname,
                    jersey_name: getCart?.jersey_name,
                    size: getCart?.size,
                    jersey_number: getCart?.jersey_number,
                    phone,
                    jersey_image: getCart?.jersey_image,
                    address,
                    zipCode,
                    user_id
                })
                try {
                    const Order_Save = await Order_jersey.save()
                    if (!Order_Save) {
                        return res.status(400).json({
                            message: 'message is something wrong'
                        })
                    }
                } catch (error) {
                    return res.status(400).json({
                        message: error
                    })
                }


                //remove carts
                try {
                    const remove_CartItem = await Cart.deleteOne({ user_id, _id: getCart._id })


                } catch (error) {
                    return res.status(400).json({
                        message: error
                    })
                }
            })

            const FinalOrderDetails = await Promise.all(OrderResult)

            res.status(200).json({ url: session.url })


            // else {
            //     return res.status(200).json("Ordered Successfully")
            // }



        }
        else {
            return res.status(400).json({
                message: 'message is something wrong'
            })
        }



    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error })
    }
}
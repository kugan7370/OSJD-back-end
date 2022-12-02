const express = require('express');
const { AddCarts, getCardDetails, removeCartItem } = require('../Controller/AddCart');
const { OrderJersey } = require('../Controller/OrderJersey');
const { stripePayment } = require('../Controller/Payment');

const router = express.Router();

//contraller path
const { userSignup, UserSignIn } = require('../Controller/userAuth');
const { requireSignin } = require('../middleware');


//user auth
router.post('/signup', userSignup)
router.post('/signin', UserSignIn)

//order jersey
router.post('/orderJersey', requireSignin, OrderJersey)

//add cart
router.post('/addCart', requireSignin, AddCarts)
router.get('/getCart', requireSignin, getCardDetails)
router.delete('/removeCart/:id', requireSignin, removeCartItem)

//payment
router.post("/create-payment-intent", requireSignin, stripePayment);



module.exports = router;
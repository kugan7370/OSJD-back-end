const express = require('express');
const { OrderJersey } = require('../Controller/OrderJersey');

const router = express.Router();

//contraller path
const { userSignup, UserSignIn } = require('../Controller/userAuth');


//user auth
router.post('/signup', userSignup)
router.post('/signin', UserSignIn)

//order jersey
router.post('/orderJersey/:id', OrderJersey)




module.exports = router;
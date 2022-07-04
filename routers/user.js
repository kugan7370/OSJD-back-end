const express = require('express');
const router = express.Router();

//contraller path
const { userSignup, UserSignIn } = require('../Controller/userAuth');



router.post('/signup', userSignup)
router.post('/signin', UserSignIn)
//router.post('/addcard', addJersey)


module.exports = router;
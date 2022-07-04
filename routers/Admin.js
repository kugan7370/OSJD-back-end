const express = require('express');

const router = express.Router();

//contraller path
const { addJerseyCategory } = require('../Controller/JerseyCategory');
const multer = require('../middleware/multer');


// router.post('/signup', userSignup)
// router.post('/signin', UserSignIn)
router.post('/AddCategory', multer.single("image"), addJerseyCategory)


module.exports = router;
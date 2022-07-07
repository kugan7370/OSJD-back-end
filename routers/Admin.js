const express = require('express');
const { addJersey, getJersey } = require('../Controller/Jerseys');

const router = express.Router();

//contraller path
const { addJerseyCategory, getCategory } = require('../Controller/JerseyCategory');
const multer = require('../middleware/multer');
const { getOrderedJersey } = require('../Controller/OrderJersey');


//add category and get
router.post('/addCategory', multer.single("image"), addJerseyCategory)
router.get('/getCategory', getCategory)

//ad jrsey and get
router.post('/addJersey', multer.single("image"), addJersey)
router.get('/getJersey', getJersey)

//get ordered jersey
router.get('/getOrderedJersey', getOrderedJersey)



module.exports = router;

const express = require('express');
const router = express.Router();


const ctrlproductions = require('../controllers/homepage');
const ctrlAboutUs = require('../controllers/aboutUs');
const ctrlContact = require('../controllers/contact')
router.get('/',ctrlproductions.homepage)


/*Other pages */
router.get('/aboutUs', ctrlAboutUs.aboutUs);
router.get('/contact',ctrlContact.contact)


module.exports = router;

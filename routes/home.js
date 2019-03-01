const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const { catchErrors } = require('../handlers/errorHandlers');

// router.use('/register', registerController.registerPage);
router.use('/', homeController.homePage);

module.exports = router;

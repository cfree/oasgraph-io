const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const csrf = require('csurf');

const router = express.Router();
const resultsController = require('../controllers/resultsController');
const { catchErrors } = require('../handlers/errorHandlers');

const middleware = [
  bodyParser.urlencoded(),
  validator(),
  // csrf({ cookie: true }),
];

router.use(middleware);

router.post(
  '/results',
  [
    resultsController.validateForm,
  ],
  resultsController.processForm,
);

module.exports = router;

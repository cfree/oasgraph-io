const { createGraphQlSchema } = require('oasgraph');
const { check, validationResult } = require('express-validator/check')

exports.validateForm = () => {
  check('oas')
    .isLength({ min: 1 })
    .withMessage('OAS is required');
}

exports.processForm = async (req, res) => {
  const errors = validationResult(req);
  const oas = matchedData(req);

  const successResults = {};

  const errorResults = {
    data: req.body,
    errors: errors.mapped(),
    // csrfToken: req.csrfToken(),
  }

  try {
    const {schema, report} = await createGraphQlSchema(oas);
    
    successResults.data = { 
      schema,
      report,
    };
    
  } catch(error) {
    console.error(error);
    return res.status(500).send({ error });
  }

  if (!errors.isEmpty()) {
    return res.status(500).send(errorResults);
  } else {
    return res.send(successResults);
  }  
};

const ApiError = require('../error/api-error');

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      next(ApiError.badRequest(error));
      return;
    }

    // set req.body with the validated value to ensure that defaults are passed downstream
    req.body = value;
    next();
  };
}

module.exports = validate;

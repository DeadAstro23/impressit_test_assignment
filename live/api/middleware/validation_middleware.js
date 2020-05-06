const responseHelper = require('../helpers/response_helper');
const ValidationError = require('../errors/validation_error');

/**
 * @param {Object} validator
 *
 * @returns {Function}
 */
function validationMiddleware(validator) {
  return function validateRequest(req, res, next) {
    try {
      validator.validate(req);
    } catch (err) {
      if (err instanceof ValidationError) {
        return responseHelper.badRequest(res, err.message);
      }
      return next(err);
    }

    return next();
  };
}

module.exports = validationMiddleware;

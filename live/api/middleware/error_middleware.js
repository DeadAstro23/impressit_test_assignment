/* eslint-disable no-unused-vars */
const ResponseHelper = require('../helpers/response_helper');

/**
 * Middleware handling both validation and internal errors.
 *
 * @param {Error} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
module.exports = (err, req, res, next) => {
  switch (err.status || 500) {
    case 400:
      ResponseHelper.badRequest(res, err.message);
      break;

    case 500:
    default:
      ResponseHelper.error(res, err.message);
      break;
  }
};

const ResponseHelper = require('../helpers/response_helper');

/**
 * Middleware handling not found response
 *
 * @param {Object} req
 * @param {Object} res
 */
module.exports = (req, res) => ResponseHelper.notFound(res);

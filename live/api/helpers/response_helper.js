/**
 * ResponseHelper
 */
class ResponseHelper {
  /**
     * @param {Object} res
     * @param {string} extension
     * @param {string} data
     * @param {number} statusCode
     *
     * @return {Promise<*>}
     */
  static custom(res, extension, data, statusCode = 200) {
    return res.status(statusCode).type(extension).send(data);
  }

  /**
     * @param {Object} res
     * @param {Object} data
     *
     * @return {Promise<*>}
     */
  static success(res, data = {}) {
    return res.status(200).json({
      data,
      status: 200,
      success: true,
    });
  }

  /**
     * @param {Object} res
     *
     * @return {Promise<*>}
     */
  static created(res) {
    return res.sendStatus(201);
  }

  /**
     * @param {Object} res
     * @param {string} message
     *
     * @return {Promise<*>}
     */
  static noContent(res, message = 'No Content') {
    return res.status(204).json({
      error: message,
      status: 204,
      success: true,
    });
  }

  /**
     * @param {Object} res
     * @param {string} message
     *
     * @return {Promise<*>}
     */
  static badRequest(res, message = 'Bad Request') {
    return res.status(400).json({
      error: message,
      status: 400,
      success: false,
    });
  }

  /**
     * @param {Object} res
     * @param {string} message
     *
     * @return {Promise<*>}
     */
  static notFound(res, message = 'Not Found') {
    return res.status(404).json({
      error: message,
      status: 404,
      success: false,
    });
  }

  /**
     * @param {Object} res
     * @param {string} message
     *
     * @return {Promise<*>}
     */
  static error(res, message = 'Internal Server Error') {
    return res.status(500).json({
      error: message,
      status: 500,
      success: false,
    });
  }
}

module.exports = ResponseHelper;

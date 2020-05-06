/**
 * ValidationError
 *
 * @class
 */
class ValidationError extends Error {
  /**
   * @param args
   */
  constructor(...args) {
    super(...args);

    this.name = 'ValidationError';
  }
}

module.exports = ValidationError;

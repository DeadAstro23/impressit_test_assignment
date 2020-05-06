/* eslint-disable max-classes-per-file */
/**
 * GetContentError
 *
 * @class
 */
class GetContentError extends Error {
  /**
   * @param args
   */
  constructor(...args) {
    super(...args);

    this.name = 'GetContentError';
  }
}

/**
 * AddContentError
 *
 * @class
 */
class AddContentError extends Error {
  /**
   * @param args
   */
  constructor(...args) {
    super(...args);

    this.name = 'AddContentError';
  }
}

/**
 * UpdateContentError
 *
 * @class
 */
class UpdateContentError extends Error {
  /**
   * @param args
   */
  constructor(...args) {
    super(...args);

    this.name = 'UpdateContentError';
  }
}

/**
 * DeleteContentError
 *
 * @class
 */
class DeleteContentError extends Error {
  /**
   * @param args
   */
  constructor(...args) {
    super(...args);

    this.name = 'DeleteContentError';
  }
}

module.exports = {
  GetContentError,
  AddContentError,
  UpdateContentError,
  DeleteContentError,
};

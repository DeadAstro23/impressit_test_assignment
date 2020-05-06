/* eslint-disable class-methods-use-this,max-classes-per-file */
const ValidationError = require('../../errors/validation_error');

class AddBookValidator {
  validate(req) {
    if (typeof req.body.name !== 'string') {
      throw new ValidationError('\'name\' has to be a string value');
    }
    if (typeof req.body.releaseDate !== 'number') {
      throw new ValidationError('\'releaseDate\' has to be an integer value');
    }
    if (typeof req.body.authorName !== 'string') {
      throw new ValidationError('\'authorName\' has to be a string value');
    }
    return true;
  }
}

class UpdateBookValidator {
  validate(req) {
    if (typeof req.body.name !== 'string') {
      throw new ValidationError('\'name\' has to be a string value');
    }
    if (typeof req.body.releaseDate !== 'number') {
      throw new ValidationError('\'releaseDate\' has to be an integer value');
    }
    if (typeof req.body.authorName !== 'string') {
      throw new ValidationError('\'authorName\' has to be a string value');
    }
    return true;
  }
}

module.exports = {
  AddBookValidator,
  UpdateBookValidator,
};

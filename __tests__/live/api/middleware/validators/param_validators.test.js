const {
  AddBookValidator,
  UpdateBookValidator,
} = require('../../../../../live/api/middleware/validators/param_validators');
const ValidationError = require('../../../../../live/api/errors/validation_error');


describe('Param Validators', () => {
  describe('AddBookValidator', () => {
    const addBookValidator = new AddBookValidator();

    test('Validator throws an error in case name is not a string.', () => {
      const req = {
        body: {
          name: 123,
        },
      };

      expect(() => addBookValidator.validate(req)).toThrow(ValidationError);
    });

    test('Validator throws an error in case releaseDate is not an integer.', () => {
      const req = {
        body: {
          name: 'Placeholder',
          releaseDate: '2020',
        },
      };

      expect(() => addBookValidator.validate(req)).toThrow(ValidationError);
    });

    test('Validator throws an error in case authorName is not a string.', () => {
      const req = {
        body: {
          name: 'Placeholder',
          releaseDate: 2020,
          authorName: false,
        },
      };

      expect(() => addBookValidator.validate(req)).toThrow(ValidationError);
    });

    test('Validator returns true in case all params are good.', () => {
      const req = {
        body: {
          name: 'Placeholder',
          releaseDate: 2020,
          authorName: 'name',
        },
      };

      expect(addBookValidator.validate(req)).toBeTruthy();
    });
  });

  describe('UpdateBookValidator', () => {
    const updateBookValidator = new UpdateBookValidator();

    test('Validator throws an error in case name is not a string.', () => {
      const req = {
        body: {
          name: 123,
        },
      };

      expect(() => updateBookValidator.validate(req)).toThrow(ValidationError);
    });

    test('Validator throws an error in case releaseDate is not an integer.', () => {
      const req = {
        body: {
          name: 'Placeholder',
          releaseDate: '2020',
        },
      };

      expect(() => updateBookValidator.validate(req)).toThrow(ValidationError);
    });

    test('Validator throws an error in case authorName is not a string.', () => {
      const req = {
        body: {
          name: 'Placeholder',
          releaseDate: 2020,
          authorName: false,
        },
      };

      expect(() => updateBookValidator.validate(req)).toThrow(ValidationError);
    });

    test('Validator returns true in case all params are good.', () => {
      const req = {
        body: {
          name: 'Placeholder',
          releaseDate: 2020,
          authorName: 'name',
        },
      };

      expect(updateBookValidator.validate(req)).toBeTruthy();
    });
  });
});

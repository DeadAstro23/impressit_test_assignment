/* eslint-disable no-unused-vars */
const BookModel = require('../models/book_model');
const responseHelper = require('../helpers/response_helper');

/**
 * Book Controller
 */
class BookController {
  /**
   * Retrieves all books
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   *
   * @return {Promise<*>}
   */
  static async getAllBooks(req, res, next) {
    try {
      const { Items, Count } = await BookModel.getALLBooks();

      if (Items.length) {
        return responseHelper.success(res, {
          items: Items,
          count: Count,
        });
      }
      return responseHelper.noContent(res);
    } catch (err) {
      return next(err);
    }
  }

  /**
   *
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   *
   * @return {Promise<*>}
   */
  static async getBookById(req, res, next) {
    try {
      const { id } = req.params;
      const { Item } = await BookModel.getBookById(id);

      if (Item) {
        return responseHelper.success(res, {
          items: [Item],
          count: 1,
        });
      }
      return responseHelper.noContent(res);
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Add new book
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   *
   * @return {Promise<*>}
   */
  static async addBook(req, res, next) {
    try {
      const { body } = req;
      await BookModel.addBook(body);

      return responseHelper.created(res);
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Update info about already existing book
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   *
   * @return {Promise<*>}
   */
  static async updateBookById(req, res, next) {
    try {
      const { params: { id }, body } = req;
      await BookModel.updateBookById(id, body);

      return responseHelper.noContent(res);
    } catch (err) {
      return responseHelper.badRequest(res, err.message);
    }
  }

  /**
   * Delete book by id
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   *
   * @return {Promise<*>}
   */
  static async deleteBookById(req, res, next) {
    try {
      const { id } = req.params;
      await BookModel.deleteBookById(id);

      return responseHelper.noContent(res);
    } catch (err) {
      return responseHelper.badRequest(res, err.message);
    }
  }
}

module.exports = BookController;

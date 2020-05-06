const uuid = require('uuid');
const {
  GetContentError,
  AddContentError,
  UpdateContentError,
  DeleteContentError,
} = require('../errors/content_errors');
const DynamoDBClient = require('../helpers/dynamodb_client');

/**
 * Book Model
 *
 * @class
 */
class BookModel {
  /**
   * Retrieves all books from DynamoDB
   *
   * @return {Object|null}
   */
  static async getALLBooks() {
    try {
      const response = await BookModel.dynamoDBClient.scan({
        TableName: process.env.BOOK_TABLE,
      }).promise();

      return response;
    } catch (e) {
      throw new GetContentError(e);
    }
  }

  /**
   * Retrieves book by id from DynamoDB
   *
   * @param {string} id
   *
   * @return {Object|null}
   */
  static async getBookById(id) {
    try {
      const response = await BookModel.dynamoDBClient.get({
        TableName: process.env.BOOK_TABLE,
        Key: {
          id,
        },
      }).promise();

      return response;
    } catch (e) {
      throw new GetContentError(e);
    }
  }

  /**
   * Add new book
   *
   * @param {Object} body
   *
   * @return {Object|null}
   */
  static async addBook(body) {
    const { name, releaseDate, authorName } = body;
    const bookData = {
      id: uuid.v1(),
      name,
      releaseDate,
      authorName,
    };

    try {
      await BookModel.dynamoDBClient.put({
        TableName: process.env.BOOK_TABLE,
        Item: bookData,
      }).promise();
      return true;
    } catch (e) {
      throw new AddContentError(e);
    }
  }


  /**
   * Update info about already existing book in DynamoDB
   *
   * @param {string} id
   * @param {Object} body
   *
   * @return {Object|null}
   */
  static async updateBookById(id, body) {
    const { name, releaseDate, authorName } = body;
    const bookData = {
      id,
      name,
      releaseDate,
      authorName,
    };

    try {
      await BookModel.dynamoDBClient.update({
        TableName: process.env.BOOK_TABLE,
        Key: {
          id,
        },
        ExpressionAttributeNames: {
          '#book_name': 'name',
          '#book_releaseDate': 'releaseDate',
          '#book_authorName': 'authorName',
        },
        ExpressionAttributeValues: {
          ':name': bookData.name,
          ':releaseDate': bookData.releaseDate,
          ':authorName': bookData.authorName,
        },
        UpdateExpression: 'SET #book_name = :name, #book_releaseDate = :releaseDate, #book_authorName = :authorName',
        ReturnValues: 'ALL_NEW',
      }).promise();

      return true;
    } catch (e) {
      throw new UpdateContentError(e);
    }
  }

  /**
   * Delete book by id from DynamoDB
   *
   * @param {string} id
   *
   * @return {Object|null}
   */
  static async deleteBookById(id) {
    try {
      const response = await BookModel.dynamoDBClient.delete({
        TableName: process.env.BOOK_TABLE,
        Key: {
          id,
        },
      }).promise();

      // DynamoDB returns empty object in caswe item successfully deleted
      if (Object.keys(response).length) {
        return response;
      }
      throw new Error("Item doesn't exist.");
    } catch (e) {
      throw new DeleteContentError(e);
    }
  }
}
BookModel.dynamoDBClient = new DynamoDBClient().getInstance();

module.exports = BookModel;

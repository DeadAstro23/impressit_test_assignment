/* eslint-disable class-methods-use-this */
const AWS = require('aws-sdk');
const config = require('config');

class DynamoDBClient {
  constructor() {
    if (!DynamoDBClient.instance) {
      DynamoDBClient.instance = new AWS.DynamoDB.DocumentClient({
        region: config.get('aws.dynamodb.region'),
        endpoint: config.get('aws.dynamodb.endpoint'),
        accessKeyId: config.get('aws.dynamodb.accessKeyId'),
        secretAccessKey: config.get('aws.dynamodb.secretAccessKey'),
      });
    }
  }

  /**
     * Getter for DynamoDB istance
     *
     *
     * @returns {Object}
     */
  getInstance() {
    return DynamoDBClient.instance;
  }
}

module.exports = DynamoDBClient;

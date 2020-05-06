/* eslint-disable import/no-dynamic-require, global-require */
const serverless = require('serverless-http');
const config = require('config');
const swaggerUi = require('swagger-ui-express');
const app = require('express')();
const bodyParser = require('body-parser');

const errorMiddleware = require('./api/middleware/error_middleware');
const notFoundMiddleware = require('./api/middleware/not_found_middleware');

const router = require('./api/router');
const responseHelper = require('./api/helpers/response_helper');

const apiVersion = config.get('app.version');

const apiSchema = {
  version: apiVersion,
  versionName: `Version ${apiVersion}.0`,
  schema: require(`./../config/swagger/v${apiVersion}/openapi-3`),
  schemaPath: '/v1/schema.json',
};

/* register schema endpoint */
app.get(apiSchema.schemaPath, (req, res) => {
  responseHelper.custom(res, 'json', apiSchema.schema);
});

/* swagger documentation */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSchema.schema, {
  explorer: true,
}));

app.use(bodyParser.json());

/* initialize api routes */
app.use(router.init());

/* not found handler */
app.use(notFoundMiddleware);

/* error handler */
app.use(errorMiddleware);

module.exports.handler = serverless(app);

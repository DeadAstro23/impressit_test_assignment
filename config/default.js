module.exports = {
  app: {
    env: process.env.NODE_ENV,
    port: {
      default: process.env.PORT,
    },
    version: 1,
  },
  aws: {
    dynamodb: {
      region: 'localhost',
      endpoint: 'http://localhost:8000',
      accessKeyId: 'DEFAULT_ACCESS_KEY',
      secretAccessKey: 'DEFAULT_SECRET',
    },
  },
};

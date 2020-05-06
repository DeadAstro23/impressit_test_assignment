const express = require('express');
const fs = require('fs');

require('express-group-routes');

/** @class */
class Router {
  /**
   * Initialize all routes
   *
   * @returns {Object} Express router instance
   */
  init() {
    return this.setupRoutes(express.Router());
  }

  /**
   * Setup routes, which are described in separate files inside the 'api/routes'
   * directory
   *
   * @param {Router} router Express router instance
   * @param {string} subdirectory
   *
   * @return {Router}
   */
  setupRoutes(router, subdirectory = '') {
    const routesPath = `${__dirname}/routes${subdirectory}`;

    if (!fs.existsSync(routesPath)) {
      throw new Error('Expected routes directory does not exist.');
    }

    fs.readdirSync(routesPath).forEach((file) => {
      const filePath = `${routesPath}/${file}`;

      if (fs.lstatSync(filePath).isDirectory()) {
        this.setupRoutes(router, `/${file}`);
      } else {
        router.group('/api', (r) => {
          r.use(require(filePath)); // eslint-disable-line global-require, import/no-dynamic-require
        });
      }
    });

    return router;
  }
}


module.exports = new Router();

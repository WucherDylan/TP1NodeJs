const express = require('express');
const { initializeConfigMiddlewares,initializeAuthMiddlewares, initializeErrorMiddlwares } = require('./middlewares');
const userRoutes = require('../controllers/user-routes');
const authRoutes = require('../controllers/authentifie-routes')

class WebServer {
  app = undefined;
  port = 3000;
  server = undefined;

  constructor() {
    this.app = express();
    initializeConfigMiddlewares(this.app);
    this._initializeRoutesAuth();
    initializeAuthMiddlewares(this.app);
    this._initializeRoutes();
    initializeErrorMiddlwares(this.app);

  }

  start() {
    this.server = this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }

  _initializeRoutes() {
    this.app.use('/users', userRoutes.initializeRoutes());
  }
  _initializeRoutesAuth() {
    this.app.use('',authRoutes.initializeRoutes());
  }
  stop(){
    this.server.close();
  }

}

module.exports = WebServer;
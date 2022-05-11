const express = require('express');
const cors = require('cors');
// const dataBase = require('./database.js');
const routes = require('../routes/index');
const app = async config => {
  const { host, port } = config;
  //initialize express
  server = express();

  //put the config in server for later use
  server.config = config;

  // server.use(express.json());
  server.use(express.json());
  server.use(cors());

  //register the routes
  routes.register(server);

  //listen to request
  server.listen(port, host, () => {
    console.log(`server running at http://${config.host}:${config.port}`);
  });

  return server;
};

module.exports = app;

const { Router } = require('express');
const router = Router();

const routes = [
  {
    path: '/api/',
    api: '@apis/testApis',
  },
];
module.exports.register = async server => {
  routes.map((route, _) => {
    server.use(route.path, require(route.api));
  });
};

const { Router } = require('express');

const Route = Router();

Route.route('/').get((req, res, next) => {
  console.log('request comes in');
  res.status(200).json({
    status: 'ok',
    message: 'ok',
  });
});

module.exports = Route;

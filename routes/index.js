const express = require('express');
const router = express.Router();

module.exports = params => {
  router.get('/', async (request, response, next) => {
    try {
      return response.render('layout', {
        pageTitle: 'Welcome',
        template: 'index'
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};

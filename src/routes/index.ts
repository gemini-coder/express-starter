import {getSimpleRoute, swGetSimpleRoute} from './simple.route';

const express = require('express');

// Here is my information for constructing Swagger Documentation
export const swSimpleRouter = {
  '/': {
    'get': {
      ...swGetSimpleRoute,
    },
  },
};
// here the routes
const router = express();
router.get('/', function(req, res) {
  getSimpleRoute(req, res);
});
export const simpleRouter = router;

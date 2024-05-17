// Module dependencies.
var express = require('express');

/**
 * Create FedCM well-known service.
 *
 * @param {express.RequestHandler} manifestHandler - Handler which responds with
 *          the well-known file.
 * @returns {express.Router}
 */
exports = module.exports = function(manifestHandler) {
  var router = express.Router();
  router.get('/', manifestHandler);
  
  return router;
};

// Module annotations.
exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/.well-known/web-identity';
exports['@require'] = [
  './handlers/manifest'
];

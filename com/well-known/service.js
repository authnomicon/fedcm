var express = require('express');

exports = module.exports = function(manifestHandler) {
  var router = express.Router();
  router.get('/', manifestHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/.well-known/web-identity';
exports['@require'] = [
  './handlers/manifest'
];

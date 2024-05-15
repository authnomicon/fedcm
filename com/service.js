var express = require('express');

exports = module.exports = function(configHandler) {
  var router = express.Router();
  router.get('/config.json', configHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/web-identity';
exports['@require'] = [
  './handlers/config'
];

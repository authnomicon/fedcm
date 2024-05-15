var express = require('express');

exports = module.exports = function(configHandler, accountsHandler, clientMetadataHandler, assertionHandler) {
  var router = express.Router();
  router.get('/config.json', configHandler);
  router.get('/accounts', accountsHandler);
  router.get('/client-metadata', clientMetadataHandler);
  router.post('/assertion', assertionHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/web-identity';
exports['@require'] = [
  './handlers/config',
  './handlers/accounts',
  './handlers/clientmetadata',
  './handlers/assertion'
];

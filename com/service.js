// Module dependencies.
var express = require('express');

/**
 * Create Federated Credential Management service.
 *
 * @param {express.RequestHandler} configHandler - Handler which responds with
 *          the config file.
 * @param {express.RequestHandler} accountsHandler - Handler which responds with
 *          the list of accounts the user is signed into.
 * @param {express.RequestHandler} clientMetadataHandler - Handler which
 *.         responds with metadata about a relying party.
 * @param {express.RequestHandler} assertionHandler - Handler which responds
 *.         with a token that contains signed assertions about the user.
 * @returns {express.Router}
 */
exports = module.exports = function(configHandler, accountsHandler, clientMetadataHandler, assertionHandler, disconnectHandler) {
  var router = express.Router();
  router.get('/config.json', configHandler);
  router.get('/accounts', accountsHandler);
  router.get('/client-metadata', clientMetadataHandler);
  router.post('/assertion', assertionHandler);
  router.post('/disconnect', disconnectHandler);
  
  return router;
};

// Module annotations.
exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/web-identity';
exports['@require'] = [
  './handlers/config',
  './handlers/accounts',
  './handlers/clientmetadata',
  './handlers/assertion',
  './handlers/disconnect'
];

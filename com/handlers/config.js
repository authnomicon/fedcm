/**
 * Create config file handler.
 *
 *
 * @returns {express.RequestHandler[]}
 */
exports = module.exports = function() {
  
  function config(req, res, next) {
    var conf = {
      accounts_endpoint: '/web-identity/accounts',
      client_metadata_endpoint: '/web-identity/client-metadata',
      id_assertion_endpoint: '/web-identity/assertion',
      login_url: '/login'
    };
    res.json(conf);
  }
  
  
  return [
    config
  ];
};

// Module annotations.
exports['@require'] = [];

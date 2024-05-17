/**
 * Create config file handler.
 *
 * Returns an HTTP handler that responds with a FedCM {@link https://fedidcg.github.io/FedCM/#idp-api-config-file config file}.
 * The config file serves as a service discovery mechanism for other FedCM
 * endpoints provided by the IDP.
 *
 * For additional implementation considerations, refer to the
 * {@link https://developers.google.com/privacy-sandbox/3pcd/fedcm-developer-guide#idp-config-file developer guide}
 * on the Privacy Sandbox at Google for Developers.
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

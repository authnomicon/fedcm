/**
 * Create well-known file handler.
 *
 * Returns an HTTP handler that responds with the FedCM {@link https://fedidcg.github.io/FedCM/#idp-api-well-known well-known file}.
 * The well-known file supplies a list of URLs that point to valid {@link https://fedidcg.github.io/FedCM/#idp-api-config-file config files}
 * for the IDP.
 *
 * The purpose of this two-tier manifest, consisting of the well-known file and
 * config file, is to prevent {@link https://fedidcg.github.io/FedCM/#manifest-fingerprinting manifest fingerprinting}
 * that would enable the IDP to track websites the user is visiting, thus
 * violating privacy expectations.
 *
 * @returns {express.RequestHandler[]}
 */
exports = module.exports = function() {
  
  function manifest(req, res, next) {
    var conf = {
      provider_url: [ '/web-identity/config.json' ]
    };
    res.json(conf);
  }
  
  
  return [
    manifest
  ];
};

// Module annotations.
exports['@require'] = [];

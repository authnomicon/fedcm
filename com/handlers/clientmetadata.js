/**
 * Create client metadata handler.
 *
 * Returns an HTTP handler that responds with metadata about a relying party, in
 * accordance with the FedCM {@link https://fedidcg.github.io/FedCM/#idp-api-client-id-metadata-endpoint client metadata endpoint}.
 *
 * For additional implementation considerations, refer to the
 * {@link https://developers.google.com/privacy-sandbox/3pcd/fedcm-developer-guide#client-metadata-endpoint developer guide}
 * on the Privacy Sandbox at Google for Developers.
 *
 * @returns {express.RequestHandler[]}
 */
exports = module.exports = function(clients) {
  
  function metadata(req, res, next) {
    clients.read(req.query.client_id, function(err, client) {
      // TODO: what is the best response for error
      if (err) { return next(err); }
      // TODO: what is the best response for unknown client
      if (!client) { return res.json({}); }
      
      var meta = {};
      if (client.privacyPolicyURL) { meta.privacy_policy_url = client.privacyPolicyURL; }
      if (client.termsOfServiceURL) { meta.terms_of_service_url = client.termsOfServiceURL; }
      res.json(meta);
    });
  }
  
  
  return [
    metadata
  ];
};

// Module annotations.
exports['@require'] = [
  'http://i.authnomicon.org/oauth2/ClientDirectory'
];

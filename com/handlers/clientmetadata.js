exports = module.exports = function(clients) {
  
  function metadata(req, res, next) {
    clients.read(req.query.client_id, function(err, client) {
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

exports['@require'] = [
  'http://i.authnomicon.org/oauth2/ClientDirectory'
];

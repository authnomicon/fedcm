var url = require('url');

exports = module.exports = function() {
  
  function config(req, res, next) {
    var conf = {
      accounts_endpoint: '/web-identity/accounts',
      client_metadata_endpoint: '/web-identity/client-metadata',
      id_assertion_endpoint: '/web-identity/assertion',
      login_url: '/web-identity/login'
    };
    res.json(conf);
  }
  
  
  return [
    config
  ];
};

exports['@require'] = [];
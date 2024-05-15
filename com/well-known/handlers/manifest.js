var url = require('url');

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

exports['@require'] = [];

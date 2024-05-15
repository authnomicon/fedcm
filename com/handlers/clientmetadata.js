var url = require('url');

exports = module.exports = function() {
  
  // TODO: auth this request and respond with accounts
  
  function config(req, res, next) {
    console.log('!!!! CLIENT METADATA !!!!');
    console.log(req.query);
    
    res.json({
      "privacy_policy_url": "https://rp.example/clientmetadata/privacy_policy.html",
      "terms_of_service_url": "https://rp.example/clientmetadata/terms_of_service.html"
    })
  }
  
  
  return [
    config
  ];
};

exports['@require'] = [];

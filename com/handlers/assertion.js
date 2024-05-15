var url = require('url');

exports = module.exports = function() {
  
  // TODO: auth this request and respond with accounts
  
  function config(req, res, next) {
    res.json({
      token: 'eyDSE'
    })
  }
  
  
  return [
    config
  ];
};

exports['@require'] = [];

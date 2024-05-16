var url = require('url');

exports = module.exports = function() {
  
  // TODO: auth this request and respond with accounts
  
  function config(req, res, next) {
    console.log('RESPOND WITH TOKEN!');
    console.log(req.headers)
    console.log(req.body);
    
    // These headers need to be set, otherwise the browser fails
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    res.json({
      token: 'eyDSE'
    })
  }
  
  
  return [
    require('body-parser').urlencoded({ extended: false }),
    config
  ];
};

exports['@require'] = [];

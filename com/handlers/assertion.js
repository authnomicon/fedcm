var url = require('url');

exports = module.exports = function(sts) {
  
  // TODO: auth this request and respond with accounts
  
  function config(req, res, next) {
    console.log('RESPOND WITH TOKEN!');
    console.log(req.headers)
    console.log(req.body);
    
    // These headers need to be set, otherwise the browser fails
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    
    var msg = {
      user: { id: req.body.account_id },
      client: { id: req.body.client_id },
      nonce: req.body.nonce
    };
    
    sts.issue(msg, function(err, token) {
      if (err) { return next(err); }
      console.log('ISSUED TOKEN!')
      console.log(token);
      res.json({
        token: token
      });
    });
  }
  
  
  return [
    require('body-parser').urlencoded({ extended: false }),
    config
  ];
};

exports['@require'] = [
  'module:@authnomicon/fedcm.TokenService'
];

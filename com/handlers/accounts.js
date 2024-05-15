var url = require('url');

exports = module.exports = function() {
  
  // TODO: auth this request and respond with accounts
  
  function config(req, res, next) {
    res.json({ accounts: [{
      id: '1234',
      given_name: 'John',
      name: 'John Doe',
      email: 'johndoe@example.com'
    }]})
  }
  
  
  return [
    config
  ];
};

exports['@require'] = [];

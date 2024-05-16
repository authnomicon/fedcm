exports = module.exports = function(authenticator) {
  
  // TODO: auth this request and respond with accounts
  
  function notLoggedIn(req, res, next) {
    if (!req.user) {
      console.log('NOT LOGGED IN');
      return res.json({ accounts: [] });
    }
    next();
  }
  
  function accounts(req, res, next) {
    console.log('ACCOUNTS!');
    console.log(req.user);
    var users = req.user;
    if (!Array.isArray(users)) {
      users = [ users ];
    }
    console.log(users);
    
    // NOTE: responding with empty array when logged in (as indicated by the Set-Login: logged-in header)
    // causes Chrome to display an option to launch the login_url
    //res.json({ accounts: [] })
    
    //return;
    
    res.json({ accounts: [{
      id: '1234',
      given_name: 'John',
      name: 'John Doe',
      email: 'johndoe@example.com'
    }]})
  }
  
  
  return [
    //authenticator.authenticate([ 'session', 'anonymous' ], { multi: true }),
    authenticator.authenticate([ 'session', 'anonymous' ], { multi: true }),
    notLoggedIn,
    accounts
  ];
};

exports['@require'] = [
  'module:passport.Authenticator'
];

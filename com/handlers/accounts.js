exports = module.exports = function(authenticator) {
  
  // TODO: auth this request and respond with accounts
  
  function notLoggedIn(req, res, next) {
    if (!req.user) {
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
    
    var accounts = []
      , i = 0;
    (function iter(err) {
      if (err) { return next(err); }
      
      var user = users[i++];
      if (!user) {
        console.log('RESPONDING WITH');
        console.log(accounts);
        
        // done, respond
        return res.json({
          accounts: accounts
        });
      }
      
      var account = {};
      account.id = user.id;
      account.name = user.username;
      account.email = user.username;
      
      accounts.push(account);
      iter();
    })();
    
    return;
    
    //var users
    
    
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

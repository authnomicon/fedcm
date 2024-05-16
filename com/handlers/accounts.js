exports = module.exports = function(authenticator) {
  
  function notLoggedIn(req, res, next) {
    if (!req.user) {
      return res.json({ accounts: [] });
    }
    next();
  }
  
  function accounts(req, res, next) {
    var users = req.user;
    if (!Array.isArray(users)) {
      users = [ users ];
    }
    
    // NOTE: responding with empty array when logged in (as indicated by the Set-Login: logged-in header)
    // causes Chrome to display an option to launch the login_url
    //res.json({ accounts: [] })
    
    var accounts = []
      , i = 0;
    (function iter(err) {
      if (err) { return next(err); }
      
      var user = users[i++];
      if (!user) {
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
  }
  
  
  return [
    authenticator.authenticate([ 'session', 'anonymous' ], { multi: true }),
    notLoggedIn,
    accounts
  ];
};

exports['@require'] = [
  'module:passport.Authenticator'
];

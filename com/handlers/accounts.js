/**
 * Create accounts handler.
 *
 * Returns an HTTP handler that responds with a list of accounts the user is
 * signed into at the IDP, in accordance with the FedCM {@link https://fedidcg.github.io/FedCM/#idp-api-accounts-endpoint accounts endpoint}.
 *
 * For additional implementation considerations, refer to the
 * {@link https://developers.google.com/privacy-sandbox/3pcd/fedcm-developer-guide#accounts-list-endpoint developer guide}
 * on the Privacy Sandbox at Google for Developers.
 *
 * @returns {express.RequestHandler[]}
 */
exports = module.exports = function(authenticator) {
  
  // TODO: Check Sec-Fetch-Dest header to prevent csrf attacks
  
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

// Module annotations.
exports['@require'] = [
  'module:passport.Authenticator'
];

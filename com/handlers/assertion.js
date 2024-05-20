/**
 * Create identity assertion handler.
 *
 * Returns an HTTP handler that responds with token that contains signed
 * assertions about the user, in accordance with the FedCM {@link https://fedidcg.github.io/FedCM/#idp-api-id-assertion-endpoint accounts endpoint}.
 *
 * For additional implementation considerations, refer to the
 * {@link https://developers.google.com/privacy-sandbox/3pcd/fedcm-developer-guide#id-assertion-endpoint developer guide}
 * on the Privacy Sandbox at Google for Developers.
 *
 * @param {passport.Authenticator} authenticator - Request authenticator.
 * @returns {express.RequestHandler[]}
 */
exports = module.exports = function(sts) {
  
  // TODO: auth this request based on account_id
  
  function issue(req, res, next) {
    // TODO: check origin header against client
    
    // These headers need to be set, otherwise the browser fails
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    
    var msg = {
      user: { id: req.body.account_id },
      client: { id: req.body.client_id },
      nonce: req.body.nonce
    };
    
    // TODO: handle disclosure_text_shown
    
    sts.issue(msg, function(err, token) {
      if (err) { return next(err); }
      res.json({
        token: token
      });
    });
  }
  
  
  return [
    require('body-parser').urlencoded({ extended: false }),
    issue
  ];
};

exports['@require'] = [
  'module:@authnomicon/fedcm.TokenService'
];

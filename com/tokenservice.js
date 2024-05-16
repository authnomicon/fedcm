exports = module.exports = function(idts) {
  
  return {
    issue: function(msg, cb) {
      // TODO: ensure underlying oidc id token adds nonce
      idts.issue(msg, cb);
    } // issue
  };
};

exports['@singleton'] = true;
exports['@implements'] = 'module:@authnomicon/fedcm.TokenService';
exports['@require'] = [
  'module:@authnomicon/openidconnect.IDTokenService'
];

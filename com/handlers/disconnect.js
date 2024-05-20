exports = module.exports = function() {
  
  function disconnect(req, res, next) {
    // TODO
  }
  
  
  return [
    require('body-parser').urlencoded({ extended: false }),
    disconnect
  ];
};

exports['@require'] = [];

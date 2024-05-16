/* global describe, it */

var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var factory = require('../../com/handlers/config');


describe('handlers/config', function() {
  
  describe('handler', function() {
    
    it('should respond with config', function(done) {
      var handler = factory();
    
      chai.express.use(handler)
        .finish(function() {
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            accounts_endpoint: '/web-identity/accounts',
            client_metadata_endpoint: '/web-identity/client-metadata',
            id_assertion_endpoint: '/web-identity/assertion',
            login_url: '/login'
          });
          done();
        })
        .listen();
    }); // should respond with config
    
  }); // handler
  
});

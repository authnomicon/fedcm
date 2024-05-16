/* global describe, it */

var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var factory = require('../../../com/well-known/handlers/manifest');


describe('well-known/handlers/manifest', function() {
  
  describe('handler', function() {
    
    it('should respond with manifest', function(done) {
      var handler = factory();
    
      chai.express.use(handler)
        .finish(function() {
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            provider_url: [
              '/web-identity/config.json'
            ]
          });
          done();
        })
        .listen();
    }); // should respond when origin is valid
    
  }); // handler
  
});

/* global describe, it */

var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var factory = require('../../com/handlers/clientmetadata');


describe('handlers/clientmetadata', function() {
  
  it('should create handler', function() {
    var authenticator = new Object();
    authenticator.authenticate = sinon.spy();
    var handler = factory(authenticator);
    
    expect(handler).to.be.an('array');
    //expect(authenticator.authenticate).to.be.calledOnce;
    //expect(authenticator.authenticate).to.be.calledWith([ 'session', 'anonymous' ], { multi: true });
  });
  
  describe('handler', function() {
    
    it('should respond with token', function(done) {
      var handler = factory();
    
      chai.express.use(handler)
        .finish(function() {
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            "privacy_policy_url": "https://rp.example/clientmetadata/privacy_policy.html",
            "terms_of_service_url": "https://rp.example/clientmetadata/terms_of_service.html"
          });
          done();
        })
        .listen();
    }); // should respond with token
    
  }); // handler
  
});

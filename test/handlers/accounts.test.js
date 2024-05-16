/* global describe, it */

var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var factory = require('../../com/handlers/accounts');


describe('handlers/accounts', function() {
  
  it('should create handler', function() {
    var authenticator = new Object();
    authenticator.authenticate = sinon.spy();
    var handler = factory(authenticator);
    
    expect(handler).to.be.an('array');
    expect(authenticator.authenticate).to.be.calledOnce;
    expect(authenticator.authenticate).to.be.calledWith([ 'session', 'anonymous' ], { multi: true });
  });
  
  describe('handler', function() {
    
    it('should respond with empty accounts list when not logged in', function(done) {
      var authenticator = new Object();
      authenticator.authenticate = function(name, options) {
        return function(req, res, next) {
          next();
        };
      };
      var handler = factory(authenticator);
    
      chai.express.use(handler)
        .finish(function() {
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            accounts: []
          });
          done();
        })
        .listen();
    }); // should respond with empty accounts list when not logged in
    
  }); // handler
  
});

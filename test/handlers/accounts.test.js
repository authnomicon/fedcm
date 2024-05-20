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
    
    it('should respond with accounts list when logged into single account', function(done) {
      var authenticator = new Object();
      authenticator.authenticate = function(name, options) {
        return function(req, res, next) {
          req.user = { id: '1', username: 'alice' };
          next();
        };
      };
      var handler = factory(authenticator);
    
      chai.express.use(handler)
        .finish(function() {
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            accounts: [{
              id: '1',
              name: 'alice',
              email: 'alice'
            }]
          });
          done();
        })
        .listen();
    }); // should respond with accounts list when logged into single account
    
    it('should respond with accounts list when logged into multiple accounts', function(done) {
      var authenticator = new Object();
      authenticator.authenticate = function(name, options) {
        return function(req, res, next) {
          req.user = [
            { id: '1', username: 'alice' },
            { id: '2', username: 'bob' }
          ];
          next();
        };
      };
      var handler = factory(authenticator);
    
      chai.express.use(handler)
        .finish(function() {
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            accounts: [{
              id: '1',
              name: 'alice',
              email: 'alice'
            }, {
              id: '2',
              name: 'bob',
              email: 'bob'
            }]
          });
          done();
        })
        .listen();
    }); // should respond with accounts list when logged into multiple accounts
    
    it('should respond with account containing single email address', function(done) {
      var authenticator = new Object();
      authenticator.authenticate = function(name, options) {
        return function(req, res, next) {
          req.user = {
            id: '1234',
            displayName: 'John Doe',
            emails: [{
              value: 'john_doe@idp.example'
            }]
          };
          next();
        };
      };
      var handler = factory(authenticator);
    
      chai.express.use(handler)
        .finish(function() {
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            accounts: [{
              id: '1234',
              name: 'John Doe',
              email: 'john_doe@idp.example'
            }]
          });
          done();
        })
        .listen();
    }); // should respond with account containing single email address
    
    it('should respond with account containing primary email address', function(done) {
      var authenticator = new Object();
      authenticator.authenticate = function(name, options) {
        return function(req, res, next) {
          req.user = {
            id: '703887',
            displayName: 'Mork Hashimoto',
            emails: [{
              value: 'mhashimoto@plaxo.com'
            }, {
              value: 'mhashimoto-04@plaxo.com',
              primary: true
            }]
          };
          next();
        };
      };
      var handler = factory(authenticator);
    
      chai.express.use(handler)
        .finish(function() {
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            accounts: [{
              id: '703887',
              name: 'Mork Hashimoto',
              email: 'mhashimoto-04@plaxo.com'
            }]
          });
          done();
        })
        .listen();
    }); // should respond with account containing primary email address
    
    it('should respond with account containing first of multiple email addresses', function(done) {
      var authenticator = new Object();
      authenticator.authenticate = function(name, options) {
        return function(req, res, next) {
          req.user = {
            id: '703887',
            displayName: 'Mork Hashimoto',
            emails: [{
              value: 'mhashimoto@plaxo.com'
            }, {
              value: 'mhashimoto@-04plaxo.com'
            }]
          };
          next();
        };
      };
      var handler = factory(authenticator);
    
      chai.express.use(handler)
        .finish(function() {
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            accounts: [{
              id: '703887',
              name: 'Mork Hashimoto',
              email: 'mhashimoto@plaxo.com'
            }]
          });
          done();
        })
        .listen();
    }); // should respond with account containing first of multiple email addresses
    
  }); // handler
  
});

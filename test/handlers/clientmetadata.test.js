/* global describe, it */

var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var factory = require('../../com/handlers/clientmetadata');


describe('handlers/clientmetadata', function() {
  
  it('should create handler', function() {
    var handler = factory();
    
    expect(handler).to.be.an('array');
  });
  
  describe('handler', function() {
    
    it('should respond with privacy policy and terms of service', function(done) {
      var clients = new Object();
      clients.read = sinon.stub().yieldsAsync(null, {
        id: '1234',
        privacyPolicyURL: 'https://rp.example/clientmetadata/privacy_policy.html',
        termsOfServiceURL: 'https://rp.example/clientmetadata/terms_of_service.html'
      });
      var handler = factory(clients);
    
      chai.express.use(handler)
        .request(function(req) {
          req.query = {};
          req.query.client_id = '1234';
        })
        .finish(function() {
          expect(clients.read).to.have.been.calledOnceWith('1234');
          
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            privacy_policy_url: 'https://rp.example/clientmetadata/privacy_policy.html',
            terms_of_service_url: 'https://rp.example/clientmetadata/terms_of_service.html'
          });
          done();
        })
        .listen();
    }); // should respond with privacy policy and terms of service
    
    it('should respond without privacy policy and terms of service', function(done) {
      var clients = new Object();
      clients.read = sinon.stub().yieldsAsync(null, {
        id: '1234'
      });
      var handler = factory(clients);
    
      chai.express.use(handler)
        .request(function(req) {
          req.query = {};
          req.query.client_id = '1234';
        })
        .finish(function() {
          expect(clients.read).to.have.been.calledOnceWith('1234');
          
          expect(this).to.have.status(200);
          expect(this).to.have.body({});
          done();
        })
        .listen();
    }); // should respond without privacy policy and terms of service
    
  }); // handler
  
});

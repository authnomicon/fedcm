/* global describe, it */

var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var factory = require('../../com/handlers/assertion');


describe('handlers/assertion', function() {
  
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
      var sts = new Object();
      sts.issue = sinon.stub().yieldsAsync(null, 'eyJ0 ... NiJ9.eyJ1c ... I6IjIifX0.DeWt4Qu ... ZXso')
      var handler = factory(sts);
    
      chai.express.use(handler)
        .request(function(req) {
          req.body = {
            account_id: '123',
            client_id: 'client1234',
            nonce: 'Ct60bD'
          };
        })
        .finish(function() {
          expect(sts.issue).to.have.been.calledOnceWith({
            user: {
              id: '123',
            },
            client: {
              id: 'client1234'
            },
            nonce: 'Ct60bD'
          });
          
          expect(this).to.have.status(200);
          expect(this).to.have.body({
            token: 'eyJ0 ... NiJ9.eyJ1c ... I6IjIifX0.DeWt4Qu ... ZXso'
          });
          done();
        })
        .listen();
    }); // should respond with token
    
  }); // handler
  
});

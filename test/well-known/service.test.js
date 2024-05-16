/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../../com/well-known/service');


describe('service', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.deep.equal('http://i.bixbyjs.org/http/Service');
    expect(factory['@path']).to.equal('/.well-known/web-identity');
  });
  
  it('should create service', function() {
    function manifestHandler() {};
  
    var service = factory(manifestHandler);
    
    expect(service).to.be.a('function');
    expect(service.length).to.equal(3);
  });
  
});

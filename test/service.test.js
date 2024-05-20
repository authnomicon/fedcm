/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../com/service');


describe('service', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.deep.equal('http://i.bixbyjs.org/http/Service');
    expect(factory['@path']).to.equal('/web-identity');
  });
  
  it('should create service', function() {
    function configHandler() {};
    function accountsHandler() {};
    function clientMetadataHandler() {};
    function assertionHandler() {};
    function disconnectHandler() {};
  
    var service = factory(configHandler, accountsHandler, clientMetadataHandler, assertionHandler, disconnectHandler);
    
    expect(service).to.be.a('function');
    expect(service.length).to.equal(3);
  });
  
});

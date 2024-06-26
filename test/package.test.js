/* global describe, it, expect */

var expect = require('chai').expect;
var sinon = require('sinon');


describe('@authnomicon/fedcm', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('org.authnomicon/fedcm');
      expect(json.assembly.components).to.deep.equal([
        'service',
        'tokenservice',
        'well-known/service'
      ]);
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});

afterEach(function() {
  sinon.restore();
});

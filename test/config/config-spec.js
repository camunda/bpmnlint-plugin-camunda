const entry = require('../..');

const expect = require('chai').expect;


describe('configs', function() {

  it('should expose camunda:recommended', function() {
    expect(entry.configs).to.exist;
    expect(entry.configs.recommended).to.exist;
  });

});
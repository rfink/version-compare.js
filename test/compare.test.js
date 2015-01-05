var should = require('should');
var compare = require('..');

/*global describe*/
/*global it*/

describe('Compare version test suite', function() {
  it('should compare regular versions correctly', function() {
    compare('11.0.1', '11.0.2').should.equal(-1);
    compare('11.0.2', '11.0.1').should.equal(1);
    compare('11.0.1', '11.0.1').should.equal(0);
  });

  it('should compare versions with different number of digits in same group', function() {
    compare('11.0.10', '11.0.2').should.equal(1);
    compare('11.0.2', '11.0.10').should.equal(-1);
  });

  it('should compare versions with different number of digits in different groups', function() {
    compare('11.1.10', '11.0').should.equal(1);
  });
});

const expect = require('chai').expect;
const solution = require('../solutions/11').solution;

describe('repeating elements', () => {
  it('should return repeating elements of an array', () => {
  	const result = solution([1,8,8,8,7,7,1,3]);
    expect(result).to.deep.equal(Object.keys({1: true, 8: true, 7: true}));
  });
});


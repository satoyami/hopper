const mocha = require('mocha');
const sinon = require('sinon');
const should = require('chai').should();
const db = require('../../data/workouts');

describe('db test template', () => {
  const sandbox = sinon.sandbox.create();
  
  describe('', () => {
    let expectedResult;
    
    before('', () => {
      db.getCount().then(
        (result) => {
          expectedResult = result;
          return expectedResult;
        }
      );
    });
    
    after('', () => {
      sandbox.restore();
    });
    
    it('get expected result', () => {
      expectedResult.should.be.ok();
    });
  });
});


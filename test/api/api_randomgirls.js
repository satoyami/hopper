const mocha = require('mocha');
const sinon = require('sinon');
const should = require('chai').should();
const request = require('request-promise');
// const server = require('../../app');

describe('/randomgirls', () => {
  // before('start server', () => {
  //   exec('npm', ['start'], {shell: 'node'});
  // });
  describe('valid call', () => {
    let response;
    before('start server', () => {
      request('http://localhost:5555/randomgirls', { json: true })
        .then((body) => {
          response = body;
          return response;
        }).catch((err) => {
          response = err;
          return response;
      });
    });
    it('returns response', () => {
      response.should.eql('ok');
    });
  });
});


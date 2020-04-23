const app_values = require('../constants');
var assert = require('chai').assert;

const port = app_values.port;
const required_port = 8080

describe('Port', function() {
    it('Should be number.', function() {
      assert.isNumber(port,required_port)
    });
    it(`Should be equal to ${required_port}.`, function() {
        assert.equal(port,required_port)
      });
});

/**
 * Dependencies.
 */

var server = require('./server');
var request = require('supertest').agent(server.listen());
var assert = require('assert');

/**
 * Tests.
 */

describe('koa-analytics', function(){
  it('should work', function(done){
    var apiKey = 'VAfcfOekZmNXJTrjnxpbr3yUt2QmoVtk';

    request
      .get('/')
      .expect(200)
      .end(function(err, res){
        assert(!!~res.text.indexOf(apiKey));
        done();
      });
  });
});

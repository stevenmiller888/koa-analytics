
/**
 * Dependencies.
 */

var CombinedStream = require('combined-stream');
var snippet = require('segmentio-snippet');
var assert = require('assert');
var fs = require('fs');

/**
 * Initialize analytics middleware with `opts`.
 *
 * @param {Object} opts
 */

module.exports = function(opts){
  assert(opts, 'you must supply an options object');
  assert(opts.apiKey, 'you must supply an apiKey');

  var contents = snippet.min({
    host: 'cdn.segment.com',
    apiKey: opts.apiKey
  });

  fs.writeFile(__dirname + '/snippet.html', '<script>' + contents + '</script>');

  return function *analytics(next) {
    yield next;

    var body = this.body;
    if (!body) return;
    if (!this.response.is('html')) return;

    var combinedStream = CombinedStream.create();
    combinedStream.append(body);
    combinedStream.append(fs.createReadStream(__dirname + '/snippet.html'));
    this.body = combinedStream;
  };
};

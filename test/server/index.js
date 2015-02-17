
/**
 * Module dependencies.
 */

var serve = require('koa-static');
var analytics = require('../../lib');
var koa = require('koa');
var path = require('path');

/**
 * Locals.
 */

var app = module.exports = koa();

/**
 * Analytics.
 */

app.use(analytics({ apiKey: 'VAfcfOekZmNXJTrjnxpbr3yUt2QmoVtk' }));

/**
 * Serve.
 */

app.use(serve(path.resolve(__dirname, '../fixtures')));

# koa-analytics

Easily embed analytics into your Koa application.

## Installation

    $ npm install koa-analytics

## Example

```js
var analytics = require('koa-analytics');
var koa = require('koa');
var app = koa();

app.use(analytics({ apiKey: 'VAfcfOekZmNXJTrjnxpbr3yUt2QmoVtk' }));

app.listen(3000);
```

## License

MIT

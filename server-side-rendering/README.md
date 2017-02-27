# Server side Rendering with React

## Up and running

**Install dependencies:**

```
yarn
```

**Development:**

```
yarn start:dev
```

**Production:**

```
yarn build
yarn start
```

## Tip for SSR

**Use HtmlWebpackPlugin with Express:**
https://github.com/ampedandwired/html-webpack-plugin/issues/145#issuecomment-170554832

```js
var express = require('express');
var app = express();
var webpack = require('webpack');
var path = require('path');

var compiler = webpack(require('./webpack.config.js'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/'
}));

app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(3000);
```

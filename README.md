��#   w e b p a c k 1 . x  
webpack 1.15.0
webpack-dev-server@1.16.3

Watch Mode and the Webpack Dev Server
$ webpack --watch
$ webpack-dev-server
  npm install webpack-dev-server@1.16.3
$ webpack-dev-server --inline
With this, you can remove the "webpack-dev-server" resource from the URL. Hot-reloading should
work using this: http://localhost:8080


Production vs Dev Builds

$ webpack -p
  To minify the bundle.js
$ npm install strip-loader --save-dev
$ npm install http-server -g

Run on production mode.
$ webpack --config webpack-production.config.js -p
$ http-server

Advanced Builds with Webpack/Adding Source Maps

$ webpack -d
 To create a source map
$ webpack-dev-server -d
$ webpack -p -d

Adding CSS to Your Build/CSS and Style Loaders

$ npm install style-loader css-loader --save-dev

Errors below:
1. When you add the statement below. CSS files are not applying
the styles properly.
commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js')
It seems to be that it is necessary to work on another thing to work
with that.

2. Also, when you have the jshint preloaders in the webpack.config.js,
webpack is not compiling.

Errors are below:

ERROR in (webpack)/~/buffer/index.js
Module not found: Error: Cannot resolve module 'jshint-loader' in C:\Users\jose.alanya\AppData\Roaming\npm\node_modules\webpack\node_modules\buffer
 @ (webpack)/~/buffer/index.js 11:13-33

ERROR in (webpack)/~/buffer/index.js
Module not found: Error: Cannot resolve module 'jshint-loader' in C:\Users\jose.alanya\AppData\Roaming\npm\node_modules\webpack\node_modules\buffer
 @ (webpack)/~/buffer/index.js 12:14-32

ERROR in (webpack)/~/buffer/index.js
Module not found: Error: Cannot resolve module 'jshint-loader' in C:\Users\jose.alanya\AppData\Roaming\npm\node_modules\webpack\node_modules\buffer
 @ (webpack)/~/buffer/index.js 13:14-32

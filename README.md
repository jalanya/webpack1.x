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

<b>Advanced Builds with Webpack/Adding Source Maps</b>

$ webpack -d
 To create a source map
$ webpack-dev-server -d
$ webpack -p -d

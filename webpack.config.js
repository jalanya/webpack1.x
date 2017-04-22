var path = require('path');
//var webpack = require('webpack');

//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('js'),
  entry: ["./app"],
  /*entry: {
    about: './about_page.js',
    home: './home_page.js',
    contact: './contact_page.js'
  },
  */
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
    filename: "bundle.js"
    //filename: "[name].js"
  },
  //plugins: [commonsPlugin],
  plugins: [
   new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: 'public'
  },
  module: {
    /*preLoaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'jshint-loader'
      }
    ],*/
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
      },
      {
       test: /\.less$/,
       exclude: /node_modules/,
       loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
      },
      {
       test: /\.(png|jpg)$/,
       exclude: /node_modules/,
       loader: 'url-loader?limit=10000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}

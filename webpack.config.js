var path = require('path');
var webpack = require('webpack');
module.exports = {
  cache: true,


  entry: {
    app: './lib/index.jsx'
  },


  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js',
    chunkFilename: '[chunkhash].js'
  },


  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
    packageMains: ["webpack", "browser", "web", "browserify", "main"]
  },


  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['6to5-loader'] }
    ]
  }
};

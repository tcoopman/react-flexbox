var path = require('path');
var webpack = require('webpack');
module.exports = {
  cache: true,


  devtool: 'eval',


  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './index'
  ],


  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'app.js'
  },


  resolve: {
    alias: {
      'react-flexbox': require.resolve('../src/index.jsx')
    },
    extensions: ['', '.js', '.jsx', '.styl']
  },


  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['react-hot', 'babel-loader'] }
    ]
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

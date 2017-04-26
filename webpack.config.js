const { resolve } = require('path')
const webpack = require('webpack')
const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  devtool: 'eval',

  entry: dev ? ['react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './'] : ['./'],

  output: dev ? {
    filename: 'bundle.js',
    publicPath: '/'
  } : {
    library: 'ReactFlexbox',
    libraryTarget: 'umd',
  },

  externals: dev ? {} : {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
  },

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'examples'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js','.jsx'],
    modules: [
      resolve(__dirname, "src"),
      "node_modules"
    ],
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  },

  plugins: dev ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ] : [
    // new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
}

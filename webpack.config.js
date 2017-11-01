const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/adrenaline.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin('./dist/app.css');

module.exports = {
  entry: ['./dist/js/index.js', './scss/app.scss'],
  output: {
    filename: './dist/js/bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"}),
      include: path.join(__dirname, "scss")
    },
    {
      test: /\.css$/,
      loader: ["style-loader", "css-loader"]
    },
      {
        test: /\.(png|jpg|svg)$/,
        include: path.join(__dirname, 'images'),
        loader: 'url-loader'
     }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './')
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    //new webpack.optimize.UglifyJsPlugin()
  ]
};

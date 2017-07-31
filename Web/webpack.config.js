const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: "./js/index.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
        //loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
    ]
  },
  output: {
    path: __dirname + "/build/",
    filename: "bundle.js"
  }
}

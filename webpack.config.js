
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var data = require('./docs/data');

module.exports = {

  entry: './docs/entry.js',

  output: {
    filename: 'docs.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('docs.js', ['/'], data)
  ]

};


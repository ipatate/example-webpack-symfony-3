const webpack = require('webpack'); // eslint-disable-line
const path = require('path');
const commonPath = require('./common-paths');

const config = {
  entry: [`${path.resolve(__dirname, '../assets/js')}/main.js`],
  output: {
    filename: 'app.js',
    path: commonPath.outputPath,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'babel-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
};

module.exports = config;

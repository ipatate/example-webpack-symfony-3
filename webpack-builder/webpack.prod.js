const webpack = require('webpack'); // eslint-disable-line
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // eslint-disable-line

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextWebpackPlugin('app.css'),
    new UglifyjsWebpackPlugin({
      sourceMap: true,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'), // eslint-disable-line
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};

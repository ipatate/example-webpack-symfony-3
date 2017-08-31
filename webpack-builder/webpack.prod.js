const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // eslint-disable-line
const WebpackPwaManifest = require('webpack-pwa-manifest'); // eslint-disable-line
const FaviconsWebpackPlugin = require('favicons-webpack-plugin'); // eslint-disable-line

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
      sourceMap: false,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'), // eslint-disable-line
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new WebpackPwaManifest({
      fingerprints: false,
      ios: true,
      inject: false,
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      theme_color: '#e81c4f',
      start_url: '/',
      icons: [
        {
          src: path.resolve('assets/img/icon.png'),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve('assets/img/icon.png'),
          size: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup',
        },
        {
          src: path.resolve('assets/img/icon.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('icons', 'android'),
        },
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve('assets/img/icon.png'),
      inject: false,
      prefix: 'icons/',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
  ],
};

const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    stats: {
      colors: true,
    },
    proxy: {
      '/': {
        target: {
          host: 'localhost',
          protocol: 'http:',
          port: 8000,
        },
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new BrowserSyncPlugin(
      {
        proxy: 'http://localhost:8080',
        files: ['app/**/*.*', 'src/**/*.*'],
      },
      {
        //reload: false
      },
    ),
  ],
};

const commonConfig = require('./webpack-builder/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = (env = { env: 'prod' }) => {
  const envConfig = require(`./webpack-builder/webpack.${env.env}.js`); // eslint-disable-line
  const mergedConfig = webpackMerge(commonConfig, envConfig);
  return mergedConfig;
};

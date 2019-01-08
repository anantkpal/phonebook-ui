const webpack = require('webpack');
const webpackCommon = require('./webpack.config.common');

module.exports = {
  mode: 'production',
  entry: webpackCommon.entry,
  resolve: webpackCommon.resolve,
  plugins: [
    ...webpackCommon.plugins,
    new webpack.DefinePlugin({
      PHONEBOOK_API: JSON.stringify('http://phonebook-api:9090'),
    }),
  ],
  module: webpackCommon.module,
  output: webpackCommon.output,
};

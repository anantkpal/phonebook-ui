const webpackCommon = require('./webpack.config.common');

module.exports = {
  mode: 'production',
  entry: webpackCommon.entry,
  resolve: webpackCommon.resolve,
  plugins: webpackCommon.plugins,
  module: webpackCommon.module,
  output: webpackCommon.output,
};

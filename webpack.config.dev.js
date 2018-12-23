const webpackCommon = require('./webpack.config.common');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: webpackCommon.module,
  resolve: webpackCommon.resolve,
  entry: webpackCommon.entry,
  plugins: [
    ...webpackCommon.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: webpackCommon.output,
};

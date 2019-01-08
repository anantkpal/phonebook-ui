const webpack = require('webpack');
const webpackCommon = require('./webpack.config.common');

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
    new webpack.DefinePlugin({
      PHONEBOOK_API: JSON.stringify('http://phonebook-api:9090'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: webpackCommon.output,
};

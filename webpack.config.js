'use strict';

const pkg = require('./package.json');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: `${__dirname}/${pkg.main}`,
  },
  output: {
    filename: `${pkg.name}.js`,
    library: pkg.name,
    libraryTarget: 'var',
    path: `${__dirname}/dist/window`,
  },
  node: {
    fs: 'empty',
    crypto: 'empty',
  },
  plugins: [
    new webpack.BannerPlugin(`${pkg.name} v${pkg.version}`),
  ],
  performance: {
    maxAssetSize: 100,
    maxEntrypointSize: 300,
    hints: 'warning',
  },
};

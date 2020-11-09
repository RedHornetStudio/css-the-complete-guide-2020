const path = require('path');

module.exports = {
  entry: {
    'main/bundle': './src/main/index.js',
    'packages/bundle': './src/packages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/js'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/js'
  },
};
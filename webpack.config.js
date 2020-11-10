const path = require('path');

module.exports = {
  entry: {
    'main': './src/main/index.js',
    'packages': './src/packages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/js'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/js'
  },
};
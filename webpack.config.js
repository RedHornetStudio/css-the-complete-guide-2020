const path = require('path');

module.exports = {
  entry: {
    'assets/js/main': './src/main/index.js',
    'packages/assets/js/packages': './src/packages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
};
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    myfile: './src/start.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].[contenthash].js',
  },
};

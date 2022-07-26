const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[fullhash]-bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      "@" : path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader"
      }
    ]
  },
}

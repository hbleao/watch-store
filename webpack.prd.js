const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { merge } = require('webpack-merge');

const common = require('./webpack.config.js')

module.exports = merge(common ,{
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/template.prod.html'
    }),
    new CleanWebpackPlugin()
  ]
})

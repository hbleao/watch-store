const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const { merge } = require('webpack-merge');

const common = require('./webpack.config.js')

module.exports = merge(common ,{
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 3000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/template.dev.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})


const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

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
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:3000'],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      clearConsole: true,
    }),
  ]
})


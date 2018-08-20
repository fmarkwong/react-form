const path = require('path')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: ["babel-polyfill", './src/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(process.cwd(), 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '^runtime.*js$',
      template: 'src/index.html'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  }
}

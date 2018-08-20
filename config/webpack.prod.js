const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react: {
          test: /node_modules\/react/
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new UglifyJsPlugin({ sourceMap: true }),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name
      }
      return Array.from(chunk.modulesIterable, m => path.relative(m.context, m.request)).join('_')
    })
  ],
  output: {
    filename: '[name].[chunkhash:6].js'
  }
})

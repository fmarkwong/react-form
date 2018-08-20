const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const production = require('./webpack.prod.js')

module.exports = merge(production, { plugins: [new BundleAnalyzerPlugin()] })

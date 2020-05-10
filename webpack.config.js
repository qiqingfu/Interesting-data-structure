/**
 * Created by qiqf on 2020/5/7
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/head-plug-linked.ts',
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: 8089
  },
  plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['./dist']
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
  ]
};

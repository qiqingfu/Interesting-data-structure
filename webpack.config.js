/**
 * Created by qiqf on 2020/9/12
 */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const OUTPUT_FILEPATH = "dist"

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, OUTPUT_FILEPATH),
  },
  resolve: {
    extensions: ['.js', ".json"]
  },
  devServer: {
    contentBase: path.join(__dirname, OUTPUT_FILEPATH),
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

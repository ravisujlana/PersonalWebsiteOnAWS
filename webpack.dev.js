const path =require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge( common,{
  entry: path.resolve(__dirname, "src","index.js"),
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
      },
    ]}
});

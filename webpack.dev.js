const path =require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge( common,{
  entry: path.resolve(__dirname, "src","index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
});

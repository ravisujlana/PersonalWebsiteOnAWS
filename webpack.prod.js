const path =require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const  MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


const OptimizeCssAssetsPlugin = require("css-minimizer-webpack-plugin");
module.exports = merge(common, {
          entry: path.resolve(__dirname, "src", "index.js"),
          mode: "production",
          output: {
                path: path.resolve(__dirname, "build"),
                filename: "bundle.[contenthash].js"
          },

          optimization: {
                   minimizer: [
                       new OptimizeCssAssetsPlugin(),
                       new webpack.optimize.AggressiveMergingPlugin(),
                       // new BundleAnalyzerPlugin(), /* Analyze Bundle size*/
                        new TerserWebpackPlugin(),
                       new CompressionPlugin({
                           algorithm: 'brotliCompress',
                           test: /\.(js|css|html|svg)$/,
                           threshold: 10240,
                           minRatio: 0.8,
                       }),
                         new HtmlWebpackPlugin({
                               template: './public/index.html',
                               minify: {
                                     collapseWhitespace: true,
                                     removeComments: true,
                                     removeRedundantAttributes: true,
                                     removeScriptTypeAttributes: true,
                                     removeStyleLinkTypeAttributes: true,
                                     useShortDoctype: true
                               }
                         })
                   ]
            },
      plugins: [new CleanWebpackPlugin( {
                verbose: true
          }), new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css"
          })
          //,new WebpackManifestPlugin()
      ],
      module: {
            rules: [
                  {
                        test: /\.css$/i,
                        use: [MiniCssExtractPlugin.loader,//2 Inject styles into DOM
                              'css-loader' //1 turns css into js
                        ],
                  },
                {
                    test: /\.(scss)$/,
                    use: [{
                        loader: 'style-loader', // inject CSS to page
                    }, {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            postcssOptions: {
                                plugins: function () { // post css plugins, can be exported to postcss.config.js
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    }, {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }]
                },
            ]}
});

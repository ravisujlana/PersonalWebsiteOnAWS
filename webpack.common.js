const path =require("path");

module.exports = {
    entry: path.resolve(__dirname, "src","lambda_articles.js.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use:  ["react-hot-loader/webpack", "babel-loader"],
            },

            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[contenthash].[ext]",
                            outputPath: "imgs"
                        }
                    },
                ],
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            }
        ]
    }
};

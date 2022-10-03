const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "../src/script/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[contenthash:5].js",
        assetModuleFilename: "[name][ext]",
        clean: true,
    },
    devServer: {
        watchFiles: ["src/*.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/template.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.jpeg$/,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};

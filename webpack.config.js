const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require('webpack-merge');

const baseConfig = {
    entry: {
        app: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                exclude: /\.module.css$/i,
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    esModule: true
                }
            }
        ],
    },
    resolve: {
        extensions: [".js"],
    },
};

module.exports = ({ }, { mode }) => {
    const isProductionMode = mode === 'production';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
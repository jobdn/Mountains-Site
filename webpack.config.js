const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const styleLoaders = (extra) => {
    const baseLoader = [
        MiniCss.loader,
        "css-loader",
    ]

    if (extra) {
        baseLoader.push(...extra);
    }
    return baseLoader;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './js/index.js'
    },
    output: {
        filename: 'js/' + filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            //loading js
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            //loading css
            {
                test: /\.css$/,
                use: styleLoaders(["postcss-loader"]),
            },
            //loading scss/sass
            {
                test: /\.s[ac]ss$/,
                use: styleLoaders(["sass-loader", "postcss-loader"]),
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer : {
        port: 4200,
        hot: isDev,
        // watchContentBase: __dirname, 
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    plugins: [
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({
            template: 'html/index.html',
            filename: filename('html'),
            // inject: 'body',
            inject: true,
        }),
        new MiniCss({
            filename: 'css/' + filename('css'),
        })
    ]
}
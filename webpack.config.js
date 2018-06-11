const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    entry: [
        'webpack-hot-middleware/client',
        './client/index.js'
    ],

    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ],

    resolve: {
        extensions: ['.js'],
        alias: {
            request: 'browser-request'
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, './client')
            },
            {
                test: /\.scss|.css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }))
            }
        ]
    }
}
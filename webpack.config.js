var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }
        ]
    }
};
var webpack = require('webpack');

module.exports = {
    entry: './src/App.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3334,
        historyApiFallback : true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json-loader'},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }

        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    node: {
        console: true,
        net: "empty",
        tls: "empty",
        fs: "empty"
    }
};
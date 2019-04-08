var path = require('path');

module.exports = {
    entry: [
        './src/js/notify.js',
        './src/scss/notify.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'notify.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ],
    }
};